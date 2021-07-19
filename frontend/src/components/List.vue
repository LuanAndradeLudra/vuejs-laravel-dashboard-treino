<template>
  <div class="list rounded shadow mb-4">
      <span class="list-title">
          {{data.title}}
          <hr />
      </span>
      <div class="table-responsive my-table">
        <table class="table table-striped table-hover table-resposive">
    <thead>
      <tr>
        <th scope="col" v-for="header in data.headers" :key="header">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data.items" :key="item.id">
        <td v-for="field in data.fields" :key="field">{{item[field]}}</td>
      </tr>
    </tbody>
  </table>
      </div>
  </div>
</template>

<script>
export default {
    name: "List",
    props: {
      data: Object,
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";

.list{
    background-color: $white;
    padding: 16px;
}
    .list-title{
        color: $blackStrong;
        font-size: 18px;
        font-weight: 600;
    }
    .my-table{
      max-height: 300px;
    }
</style>
