                窗口关闭 ：window.nativeBridge.closeCloudView()



                function classroomOpenFile(serverData,dataFile,fileId,fileName,byClick){

                    var eeoFileType=dataFile.eeoFileType;
                    if(dataFile.output){
                        dataFile=dataFile.output;
                    }
                    var dataFileInfo;
                    console.log(fileId,fileName)
                    switch(eeoFileType){
                        case 'eeo-ppt':
                            if(dataFile['HTML5']){
                                dataFileInfo=dataFile['HTML5'];
                                //var edpUrl=e.data.path+dataFileInfo.rootPath+'/index.html';
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getH5PptId(
                                        fileId,
                                        fileName,
                                        //dataFileInfo.width+4,
                                        //dataFileInfo.height+38,
                                        dataFileInfo.width,
                                        dataFileInfo.height,
                                        dataFileInfo.pageNumber,
                                        byClick
                                    );
                                })

                            }
                            else if(dataFile['JPEG']){
                                dataFileInfo=dataFile['JPEG'];
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getPptId(
                                        fileId,
                                        fileName,
                                        dataFileInfo.imageWidth,
                                        dataFileInfo.imageHeight,
                                        dataFileInfo.imagePaths.length,
                                        byClick
                                    );
                                })

                            }
                            else{
                                throw "eeo-ppt error";
                            }
                            break;
                        case 'eeo-image':
                            if(dataFile['SHRINK']){
                                dataFileInfo=dataFile['SHRINK'];
                                var imgUrl=serverData.data.path+dataFileInfo.imagePaths[0];
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getUrl(
                                        fileId,
                                        imgUrl
                                    );
                                })

                            }else{
                                throw "eeo-image error";
                            }
                            break;
                        case 'eeo-edp':
                            if(dataFile['HTML5']){
                                dataFileInfo=dataFile['HTML5'];
                                //var edpUrl=e.data.path+dataFileInfo.rootPath+'/index.html';
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getH5PptId(
                                        fileId,
                                        fileName,
                                        //dataFileInfo.width+4,
                                        //dataFileInfo.height+38,
                                        dataFileInfo.width,
                                        dataFileInfo.height,
                                        dataFileInfo.pageNumber,
                                        byClick
                                    );
                                })

                            }else{
                                throw "eeo-edp error";
                            }
                            break;
                        case 'eeo-edb':
                            if(dataFile['MIGRATION']){
                                dataFileInfo=dataFile['MIGRATION'];
                                var edbUrl=serverData.data.path+dataFileInfo.path;
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getEdbUrl(edbUrl);
                                })

                            }else{
                                throw "eeo-edb error";
                            }
                            break;
                        case 'eeo-edt':
                            if(dataFile['VALIDATION']){
                                dataFileInfo=dataFile['VALIDATION'];
                                var edtUrl=serverData.data.path+dataFileInfo.path;
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getEdtUrl(edtUrl);
                                })

                            }else{
                                throw "eeo-edt error";
                            }
                            break;
                        case 'eeo-pdf':
                            if(dataFile['NOOP']){
                                dataFileInfo=dataFile['NOOP'];
                                var pdfUrl=serverData.data.path+dataFileInfo.path;
                                pdfUrl=encodeURIComponent(pdfUrl);
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getPdfFile(
                                        fileId,
                                        fileName,
                                        pdfUrl
                                    );
                                })
                            }
                            else if(dataFile['SHRINK']){
                                dataFileInfo=dataFile['SHRINK'];
                                var pdfUrl=serverData.data.path+dataFileInfo.path;
                                pdfUrl=encodeURIComponent(pdfUrl);
                                var pageArr=[];
                                dataFileInfo.pageGeometries.map((v,i)=>{
                                    var arr=v.split('x');
                                    arr[0]=parseInt(arr[0]);
                                    arr[1]=parseInt(arr[1]);
                                    pageArr.push(arr.join('x'))
                                })

                                window.qtAPILoad.ready(function(){
                                    window.nativeBridge.getPdfFile(
                                    fileId,
                                    fileName,
                                    pdfUrl,
                                    pageArr
                                );
                             })

                            }
                            else{
                                throw "eeo-pdf error";
                            }
                            break;
                        case 'eeo-doc':
                            if(dataFile['PDF']){
                                dataFileInfo=dataFile['PDF'];
                                var pdfUrl=serverData.data.path+dataFileInfo.path;
                                pdfUrl=encodeURIComponent(pdfUrl);
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getPdfFile(
                                        fileId,
                                        fileName,
                                        pdfUrl,
                                        dataFileInfo.pageGeometries || ''
                                    );
                                })

                            }
                            else{
                                throw "eeo-doc error";
                            }
                            break;
                        case 'eeo-text':
                            if(dataFile['SIZELIMITED']){
                                dataFileInfo=dataFile['SIZELIMITED'];
                                var fileUrl=serverData.data.path+dataFileInfo.path;
                                fileUrl=encodeURIComponent(fileUrl);
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getTextFile(
                                        fileId,
                                        fileName,
                                        fileUrl
                                    );
                                })

                            }else{
                                throw "eeo-text error";
                            }
                            break;
                        case 'eeo-video':
                            if(dataFile['V360P']){
                                dataFileInfo=dataFile['V360P'];
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getVideoFile(
                                        fileId,
                                        fileName,
                                        serverData.data.path+dataFileInfo.path,
                                        dataFileInfo.duration,
                                        dataFileInfo.resolution
                                    );
                                })

                            }else{
                                throw "eeo-video error";
                            }
                            break;
                        case 'eeo-audio':
                            if(dataFile['AAC96K']){
                                dataFileInfo=dataFile['AAC96K'];
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getAudioFile(
                                        fileId,
                                        fileName,
                                        serverData.data.path+dataFileInfo.path,
                                        dataFileInfo.duration,
                                        dataFileInfo.title
                                    );
                                })

                            }else if(dataFile['MP396K']){
                                dataFileInfo=dataFile['MP396K'];
                                window.qtAPILoad.ready(()=>{
                                    window.nativeBridge.getAudioFile(
                                        fileId,
                                        fileName,
                                        serverData.data.path+dataFileInfo.path,
                                        dataFileInfo.duration,
                                        ''
                                    );
                                })

                            }else{
                                throw "eeo-audio error";
                            }
                            break;
                        case 'eeo-sgf':
                            if(dataFile['NOOP']){
                                dataFileInfo=dataFile['NOOP'];
                                var fileSrc=serverData.data.path+dataFileInfo.path;
                                axios({
                                    url:fileSrc,
                                    method:'get',
                                    data:'',
                                    transformRequest: [function (data) {
                                      let ret = ''
                                      for (let it in data) {
                                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                                      }
                                      return ret
                                  }],
                                }).then((response)=>{
                                        var fileContent=response.data;
                                        window.qtAPILoad.ready(()=>{
                                            window.nativeBridge.getThirdPartyFile(
                                                fileId,
                                                fileName,
                                                '/client/classinapp/goboard/index.html',
                                                fileSrc,
                                                fileContent,
                                                '700x540,360x310,0x0'
                                            )
                                        })
                                }).catch((error)=>{
                                    console.log(error)
                                })
                            }else{
                                throw "eeo-sgf error";
                            }
                            break;
                    }
                }