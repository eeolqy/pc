<template>
  <li>
    <div
      style="color:#f66;height:40px;"
      @click="toggle"
      @dblclick="changeType">
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
      {{model.name}}
    </div>
     <el-collapse-transition>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="model in model.children"
        :key="model"
        :model="model">
      </item>
      <!-- <li class="add" @click="addChild">+</li> -->
    </ul>
     </el-collapse-transition>
  </li>
</template>
<script type="text/javascript">
  export default {
    name:'item',
    props:['model'],
    data: function () {
      return {
        open: true,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    computed: {
      isFolder: function () {
        console.log(this.model)
        return this.model.children &&
          this.model.children.length
      }
    },
    created(){
      // this.toggle()
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          Vue.set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      addChild: function () {
        this.model.children.push({
          name: 'new stuff'
        })
      }
    }
  }
</script>