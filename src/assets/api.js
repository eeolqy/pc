import getReallyTime from '../filter/get_really_time.js'
var safeKey = function(id){
	return new Promise(function(resolve,reject){
		getReallyTime.runInRealTime(getRealTime=>{
			resolve({
				timeStamp:Math.floor(getRealTime()/1000),
				safeKey:md5(Math.floor(getRealTime()/1000)+id+'classin')
			})
				//safeKey(md5(Math.floor(getRealTime()/1000)+id+'classin'))
		})
	})
	
}
export default safeKey

import qs from 'qs';
import ajaxErrorAlert from './ajaxerroralert';
//import ajaxerroralert from './ajaxerroralert'
import moment from 'moment';
import TranslatePinyin from '../filter/chinese_format.js'
import MakeSafeKey     from '../ajax/make_safekey.js'
var axiosRequest = (function(){
    var axiosPost = function(restfulType,postData,cb){
        return new Promise((resolve,reject)=>{
            resolve(MakeSafeKey(postData.schoolUid).then((res)=>{
                var clientTypeList={
                    'pc':1,
                    'iPhone':2,
                    'iPad':3,
                    'androidPhone':4,
                    'androidPad':5,
                    'MacOS':6,
                }
                var restFulData={
                    _top:{
                        url:function(){
                            return '/api/cloud.api.php?action=getTopFolderId'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'222',
                                safeKey:'',
                                timeStamp:'dasdasd',
                            }
                            serverPostData.UID = postData.schoolUid
                            //console.log(MakeSafeKey)
                            // MakeSafeKey(postData.id).then((res)=>{
                            //     //return serverPostData;
                            // })
                            serverPostData.safeKey = res.safeKey
                            serverPostData.timeStamp = res.timeStamp
                            // serverPostData.source = clientTypeList[postData.source]
                            // serverPostData.version = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return res.data
                                break;
                                default:
                                    ajaxErrorAlert('getTopFolderId',res.error_info)
                                    return false
                                
                            }

                        }
                    },
                    _get:{
                        url:function(){
                            return '/api/cloud.api.php?action=getFolderList'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:''
                            }
                            serverPostData.UID = postData.schoolUid
                            serverPostData.folderId = postData.folderId
                            serverPostData.safeKey = res.safeKey
                            serverPostData.timeStamp = res.timeStamp
                            serverPostData.source = clientTypeList[postData.source]
                            serverPostData.version = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    let folderList=res.data.folder_list;
                                    let fileList = res.data.file_list;
                                    let localDataList = []
                                    let folderLists = []
                                    var setLocalDate = function(){
                                        folderList.map((item)=>{
                                            if(postData.folderId==''){
                                                if(!(item.type==2)){
                                                    localDataList.push({
                                                        schoolUid:'postData.id',
                                                        type:parseInt(item.type),
                                                        id:item.folder_id,
                                                        name:item.folder_name,
                                                        isSystemFolder:item.is_system_folder,
                                                        updateTime:item.uptime*1000,
                                                        size:'',
                                                        popoverVisible:false,
                                                        renameStatus:false,
                                                        schoolUid:postData.schoolUid,
                                                        pinyinName:TranslatePinyin(item.folder_name)
                                                    })
                                                }
                                            }else{
                                                localDataList.push({
                                                    schoolUid:'postData.id',
                                                    type:parseInt(item.type),
                                                    id:item.folder_id,
                                                    name:item.folder_name,
                                                    isSystemFolder:item.is_system_folder,
                                                    updateTime:item.uptime*1000,
                                                    size:'',
                                                    popoverVisible:false,
                                                    renameStatus:false,
                                                    schoolUid:postData.schoolUid,
                                                    pinyinName:TranslatePinyin(item.folder_name)
                                                })
                                            }
                                            folderLists.push({
                                                id:item.folder_id,
                                                name:item.folder_name,
                                                type:item.type,
                                                pinyinName:TranslatePinyin(item.folder_name)
                                            })
                                        })

                                        fileList.map((item)=>{
                                            let filearr = item.file_name.split('.')
                                            let len  = filearr.length
                                            let filetype = filearr[len-1]
                                            let fileName = ''
                                            filearr.map((item,index)=>{
                                                if(index<filearr.length-1){
                                                    fileName+=item
                                                }
                                            })
                                            let commonSize = 0
                                            if(item.file_size.indexOf('M')>-1){
                                                commonSize = parseInt(item.file_size)*1024
                                            }else{
                                                commonSize = parseInt(item.file_size)
                                            }
                                            localDataList.push({
                                                schoolUid:'postData.id',
                                                type:filetype,
                                                id:item.id,
                                                name:fileName,
                                                isSystemFolder:'',
                                                size:item.file_size,
                                                updateTime:item.uptime*1000,
                                                popoverVisible:false,
                                                transitionStatus:item.transition_state,
                                                renameStatus:false,
                                                commonSize:commonSize,
                                                pinyinName:TranslatePinyin(fileName)
                                            })
                                        })
                                    }
                                    // if(postData.lazy){
                                    //         setLocalDate()
                                    // }else{
                                    //     TranslatePinyin(()=>{
                                    //         setLocalDate()
                                    //     })
                                    // }
                                    setLocalDate()
                                    if(localDataList[0]!==undefined){
                                        if(localDataList[0].type==2){
                                            localDataList[0].name = window.Vue.t('cloudDisk.folderName.school')
                                        // localDataList[1].name = window.Vue.t('cloudDisk.folderName.my')
                                        }
                                    }
                                    localDataList.map((v,i)=>{
                                        v.schoolUid = postData.schoolUid
                                    })
                                    let localData = {
                                        fileFolderList:localDataList,
                                        total:res.data.total_num,
                                        folderLists:folderLists
                                    }
                                    return localData
                                break;
                                default:
                               
                                    ajaxErrorAlert('getFolderList',res.error_info)
                                    return false
                            }

                        }
                    },
                    _post:{
                        url:function(){
                            return '/api/cloud.api.php?action=getMySchoolFolderList'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:'',
                            }
                            serverPostData.UID = postData.schoolUid
                            serverPostData.folderId = postData.folderId
                            serverPostData.safeKey = res.safeKey
                            serverPostData.timeStamp = res.timeStamp
                            serverPostData.source = clientTypeList[postData.source]
                            serverPostData.version = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    let folderList = res.data.folder_list;
                                    let fileList   = []
                                    if(res.data.file_list){
                                        let fileList = res.data.file_list;
                                    }
                                    let localDataList = []
                                    folderList.map((item)=>{
                                        localDataList.push({
                                            schoolUid:item.school_uid,
                                            name:item.folder_name,
                                            type:0
                                        })
                                    })

                                    fileList.map((item)=>{
                                        let filearr = item.file_name.split('.')
                                        let len  = filearr.length
                                        let filetype = filearr[len-1]
                                        localDataList.push({
                                            type:filetype,
                                            id:item.id,
                                            name:item.file_name,
                                            isSystemFolder:'',
                                            size:item.file_size,
                                            updateTime:item.uptime*1000,
                                            popoverVisible:false
                                        })
                                    })

                                    let localData = {
                                        fileFolderList:localDataList,
                                        total:res.data.total_num,
                                    }
                                    return localData
                                break;
                                default:
                                    
                                    ajaxErrorAlert('getMySchoolFolderList',res.error_info)
                                    return false
                            }

                        }
                    },
                    _add:{
                        url:function(){
                            return '/api/cloud.api.php?action=createFolder'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:'',
                                folderName:''
                            }
                            serverPostData.UID          = postData.schoolUid
                            serverPostData.safeKey      = res.safeKey
                            serverPostData.folderId     = postData.folderId
                            serverPostData.timeStamp    = res.timeStamp
                            serverPostData.folderName   = postData.folderName
                            serverPostData.source       = clientTypeList[postData.source]
                            serverPostData.version      = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return {
                                        id:res.data.folder_id
                                    }
                                break;
                                default:
                                    ajaxErrorAlert('createFolder',res.error_info)
                                    return false
                            }

                        }
                    },
                    _copy:{
                        url:function(){
                            return '/api/cloud.api.php?action=batchCopyto'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:'',
                                destFolderId:'',
                                folderStr:'',
                                fileStr:''
                            }
                            serverPostData.UID           = postData.schoolUid
                            serverPostData.safeKey       = res.safeKey
                            serverPostData.folderId      = postData.folderId
                            serverPostData.timeStamp     = res.timeStamp
                            serverPostData.destFolderId  = postData.targetFolderId
                            serverPostData.folderStr     = postData.folderStr
                            serverPostData.fileStr       = postData.fileStr
                            serverPostData.source = clientTypeList[postData.source]
                            serverPostData.version = postData.version

                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return true;
                                break;
                                default:
                                    ajaxErrorAlert('batchCopyto',res.error_info)
                                    return false
                            }

                        }
                    },
                    _move:{
                        url:function(){
                            return '/api/cloud.api.php?action=batchMove'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:'',
                                destFolderId:'',
                                folderStr:'',
                                fileStr:''
                            }
                            serverPostData.UID           = postData.schoolUid
                            serverPostData.safeKey       = res.safeKey
                            serverPostData.folderId      = postData.folderId
                            serverPostData.timeStamp     = res.timeStamp
                            serverPostData.destFolderId  = postData.targetFolderId
                            serverPostData.folderStr     = postData.folderStr
                            serverPostData.fileStr       = postData.fileStr
                            serverPostData.source        = clientTypeList[postData.source]
                            serverPostData.version       = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return true;
                                break;
                                default:
                                    ajaxErrorAlert('batchMove',res.error_info)
                                    return false
                            }

                        }
                    },
                    _del:{
                        url:function(){
                            return '/api/cloud.api.php?action=batchDel'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:'',
                                destFolderId:'',
                                folderStr:'',
                                fileStr:''
                            }
                            serverPostData.UID           = postData.schoolUid
                            serverPostData.safeKey       = res.safeKey
                            serverPostData.folderId      = postData.folderId
                            serverPostData.timeStamp     = res.timeStamp
                            serverPostData.destFolderId  = postData.targetFolderId
                            serverPostData.folderStr     = postData.folderStr
                            serverPostData.fileStr       = postData.fileStr
                            serverPostData.source        = clientTypeList[postData.source]
                            serverPostData.version       = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return true;
                                break;
                                default:
                                    ajaxErrorAlert('batchDel',res.error_info)
                                    return false
                            }

                        }
                    },
                    _renameFolder:{
                        url:function(){
                            return '/api/cloud.api.php?action=renameFolder'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                folderId:'',
                                folderName:'',
                            }
                            serverPostData.UID           = postData.schoolUid
                            serverPostData.safeKey       = res.safeKey
                            serverPostData.folderId      = postData.folderId
                            serverPostData.timeStamp     = res.timeStamp
                            serverPostData.folderName    = postData.folderName
                            serverPostData.source        = clientTypeList[postData.source]
                            serverPostData.version       = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return true;
                                break;
                                default:
                                    ajaxErrorAlert('renameFolder',res.error_info)
                                    return false
                            }

                        }
                    },
                    _renameFile:{
                        url:function(){
                            return '/api/cloud.api.php?action=renameFile'
                        },
                        data:function(){
                            var serverPostData = {
                                UID:'',
                                safeKey:'',
                                timeStamp:'',
                                fileId:'',
                                fileName:'',
                            }
                            serverPostData.UID           = postData.schoolUid
                            serverPostData.safeKey       = res.safeKey
                            serverPostData.fileId        = postData.fileId
                            serverPostData.timeStamp     = res.timeStamp
                            serverPostData.fileName      = postData.fileName
                            serverPostData.source        = clientTypeList[postData.source]
                            serverPostData.version       = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    return true;
                                break;
                                default:
                                    ajaxErrorAlert('renameFile',res.error_info)
                                    return false
                            }

                        }
                    },
                    _open:{
                        url:function(){
                            return '/api/file.api.php?action=getTransFiles'
                        },
                        data:function(){
                            var serverPostData = {
                                file_id:'',
                            }
                            serverPostData.file_id  = postData.file_id
                            serverPostData.source = clientTypeList[postData.source]
                            serverPostData.version = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    var localData = {
                                        errno:1,
                                        file:'',
                                        path:''
                                    }
                                    localData.file = res.data.file
                                    localData.path = res.data.path
                                    return localData;
                                break;
                                case 107:
                                    var localData = {
                                        errno:107,
                                        fileTotal:res.data
                                    }
                                    return localData;
                                break;
                                default:
                                    ajaxErrorAlert('getTransFiles',res.error_info)
                                    return false
                            }

                        }
                    },
                    _lesson:{
                        url:function(){
                            return '/api/cloud.api.php?action=getClassCloudFolder'
                        },
                        data:function(){
                            var serverPostData = {}
                            serverPostData.UID           = postData.schoolUid
                            serverPostData.safeKey       = res.safeKey
                            serverPostData.timeStamp     = res.timeStamp
                            serverPostData.clientClassId = postData.lessonId
                            serverPostData.source        = clientTypeList[postData.source]
                            serverPostData.version       = postData.version
                            return serverPostData;
                        },
                        transformResponse:function(res){
                            let errno = res.error_info.errno
                            switch (errno) {
                                case 1:
                                    var localData = {
                                        id:res.data.folder.folderId,
                                        schoolUid:res.data.folder.schoolUid,
                                        name:window.Vue.t('cloudDisk.folderName.class'),
                                        type:1,
                                        isSystemFolder:1,
                                        pinyinName:TranslatePinyin('本节课资源'),
                                        popoverVisible:false,
                                        renameStatus:false,
                                        rowEnter:false,
                                        size:''
                                    }
                                    return localData;
                                break;
                                case 335:
                                    return false
                                break;
                                default:
                                    ajaxErrorAlert('getClassCloudFolder',res.error_info)
                                    return false
                            }

                        }
                    },
                
                }
                var restFulUse=restFulData['_'+restfulType];
                if(restFulUse===undefined){
                    alert('接口请求RESTFUL类型错误');
                    return false;
                }
                return new Promise(function(resolve,reject){
                    TranslatePinyin(function(){
                        resolve(axios({
                            url:restFulUse.url(),
                            method:restFulUse.method || 'post',
                            responseType:'text',
                            data:qs.stringify(restFulUse.data()),
                            transformResponse:[function(res){
                                var jsonObj=false;
                                try{
                                    jsonObj=JSON.parse(res)
                                }
                                catch(res){
                                    //ajaxErrorAlert('jsonParseError','');
                                }
                                if(jsonObj){
                                    return restFulUse.transformResponse(jsonObj);
                                }else{
                                    return false
                                }

                            }]
                        }))
                    })
                })
            }))
        })


        // return axios({
        //     url:restFulUse.url(),
        //     method:restFulUse.method || 'post',
        //     responseType:'text',
        //     data:qs.stringify(restFulUse.data()),
        //     transformResponse:[function(res){
        //         var jsonObj=false;
        //         try{
        //             jsonObj=JSON.parse(res)
        //         }
        //         catch(res){
        //             //ajaxErrorAlert('jsonParseError','');
        //         }
        //         switch (restfulType) {
        //             case 'download':
        //                 return restFulUse.transformResponse(jsonObj);
        //                 break;
        //             default:
        //             if(jsonObj){
        //                 return restFulUse.transformResponse(jsonObj);
        //             }else{
        //                 return false
        //             }
        //         }
        //
        //     }]
        // });
    }
    return axiosPost;
})()

export default axiosRequest;
