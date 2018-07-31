<template>
  <div class="container">
    <div class="basic">
      <ul>
        <li>
          <label>姓名</label>
          <div class="content"><!-- <input type="text" placeholder="请输入"> -->请输入</div>
        </li>
        <li>
          <label>性别</label>
          <div class="content">未设置<i>&gt;</i></div>
        </li>
        <li>
          <label>生日</label>
          <div class="content">1990-12-01<i>&gt;</i></div>
        </li>
        <li>
          <label>身份证号</label>
          <div class="content">110102198207261234<i>&gt;</i></div>
        </li>
        <li>
          <label>身高</label>
          <div class="content">cm</div>
        </li>
        <li>
          <label>体重</label>
          <div class="content">kg</div>
        </li>
        <li>
          <label>是否希望减重</label>
          <div class="content">未设置<i>&gt;</i></div>
        </li>
        <li>
          <label>婚姻状况</label>
          <div class="content">未设置<i>&gt;</i></div>
        </li>
        <li>
          <label>文化程度</label>
          <div class="content">未设置<i>&gt;</i></div>
        </li>
        <li>
          <label>职业</label>
          <div class="content">未设置<i>&gt;</i></div>
        </li>
        <li>
          <label>医保类型</label>
          <div class="content">城镇职工<i>&gt;</i></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="scss">
  .container {
    background-color: #f7f7f7;
    .basic {
      margin-top: 20px;
      background-color: #fff;
      ul {
        margin: 0 30px;
        li {
          border-bottom: 1px solid #dcdcdc;
          height: 90px;
          line-height: 90px;
          label {
            font-size: 30px;
            color: #535353;
          }
          .content {
            float: right;
            font-size: 26px;
            color: #9e9e9e;
            i {
              margin-left: 28px;
              font-style: normal;
            }
          }
        }
      }
    }
  }
</style>