<template>
  <div class="login">
    <div class="box">
      <h1 class="title">登录</h1>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入账号"
            v-model="form.username"
            clearable
            prefix-icon="el-icon-mobile-phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="form.password"
            clearable
            prefix-icon="el-icon-edit"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click.enter="go('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from "@/api/index.js";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    go(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          login(this.form).then(res => {
            console.log(res);
            if (res.meta.status == 200) {
              this.$message({
                showClose: true,
                message: res.meta.msg,
                type: "success",
                duration: 800,
                onClose: () => {
                  this.$router.push({ name: "home" });
                }
              });
            }
            if (res.meta.status == 400) {
              this.$message({
                showClose: true,
                message: res.meta.msg,
                type: "error"
              });
            }
          });
        } else {
          console.log("校验失败");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.box {
  height: 200px;
  margin: 200px auto 0;
  width: 400px;
  text-align: center;
  .title {
    text-align: center;
    margin-bottom: 10px;
  }
  .el-input__inner {
    margin-bottom: 10px !important;
  }
  .el-icon-mobile-phone:before,
  .el-icon-edit:before {
    position: absolute;
    left: 5px;
  }
  .el-form-item {
    text-align: center;
    .el-form-item__content {
      margin-left: 0px !important;
    }
  }
}
</style>
