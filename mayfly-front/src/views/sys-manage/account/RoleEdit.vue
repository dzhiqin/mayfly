<template>
  <div class="account-dialog">
    <el-dialog
      :title="account == null ? '' : '分配“'+account.username+'”的角色'"
      :visible="visible"
      :show-close="false"
    >
      <div class="toolbar">
        <div style="float: left">
          <el-input
            placeholder="请输入角色名"
            size="small"
            style="width: 150px"
            v-model="query.name"
            @clear="clear()"
            clearable
          ></el-input>
          <el-button @click="search" type="success" icon="el-icon-search" size="small"></el-button>
        </div>
      </div>
      <el-table :data="allRole" border ref="roleTable" @select="select" style="width: 100%">
        <el-table-column type="selection" width="40"></el-table-column>
        <el-table-column prop="name" label="角色名称"></el-table-column>
        <el-table-column prop="remark" label="角色描述">
          <div slot-scope="scope">{{ scope.row.remark ? scope.row.remark : '暂无描述' }}</div>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handlePageChange"
        style="text-align: center;margin-top: 20px;"
        background
        layout="prev, pager, next, total, jumper"
        :total="total"
        :current-page.sync="query.pageNum"
        :page-size="query.pageSize"
      ></el-pagination>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel()" size="small">取 消</el-button>
        <el-button type="primary" :loading="btnLoading" @click="btnOk" size="small">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import AllRouter from '@/router/'
import { roleApi, accountApi } from '../api'

@Component({
  name: 'RoleEdit'
})
export default class RoleEdit extends Vue {
  @Prop()
  visible: false
  @Prop()
  account: [Object, Boolean]

  btnLoading = false
  // 所有角色
  allRole: any[] = []
  // 该账号拥有的角色id
  roles: any[] = []
  query = {
    name: null,
    pageNum: 1,
    pageSize: 5
  }
  total = 0

  @Watch('account', { deep: true })
  onDataChange() {
    if (this.account === null) return
    accountApi.roleIds
      .request({
        id: this.account['id']
      })
      .then(res => {
        this.roles = res
        this.search()
      })
  }

  handlePageChange() {
    this.search()
  }

  select(val: any, row: any) {
    let roles = this.roles
    // 如果账号的角色id存在则为取消该角色(删除角色id列表中的该记录id)，否则为新增角色
    if (roles.includes(row.id)) {
      for (let i = 0; i < roles.length; i++) {
        let item = roles[i]
        if (item === row.id) {
          roles.splice(i, 1)
          break
        }
      }
    } else {
      roles.push(row.id)
    }
  }

  /**
   * 检查是否勾选权限,即是否拥有权限
   */
  checkSelected() {
    // 必须用异步，否则勾选不了
    setTimeout(() => {
      const roleTable: any = this.$refs.roleTable
      roleTable.clearSelection()
      this.allRole.forEach(r => {
        if (this.roles.includes(r.id)) {
          roleTable.toggleRowSelection(r, true)
        }
      })
    }, 50)
  }
  async btnOk() {
    let roleIds = this.roles.join(',')
    await accountApi.saveRoles.request({
      id: this.account['id'],
      roleIds: roleIds
    })
    this.$message.success('保存成功!')
    this.cancel()
  }
  /**
   * 取消
   */
  cancel() {
    this.query.pageNum = 1
    this.query.name = null
    this.$emit('cancel')
  }
  /**
   * 清空查询框
   */
  clear() {
    this.query.pageNum = 1
    this.query.name = null
    this.search()
  }

  async search() {
    let res = await roleApi.list.request(this.query)
    this.allRole = res.list
    this.total = res.total
    this.checkSelected()
  }
}
</script>
