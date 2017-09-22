<template>
  <div class="menuList">
    <mu-list>
      <mu-list-item title="Sent mail">
        <mu-icon slot="left" value="send"/>
      </mu-list-item>
      <mu-list-item title="Drafts">
        <mu-icon slot="left" value="drafts"/>
      </mu-list-item>
      <mu-list-item title="demo" toggleNested>
        <mu-icon slot="left" value="inbox"/>
        <mu-list-item slot="nested" title="Starred">
          <mu-icon slot="left" value="grade"/>
        </mu-list-item>
        <mu-list-item slot="nested" title="Sent mail" toggleNested>
          <mu-icon slot="left" value="send"/>
          <mu-list-item title="Drafts" slot="nested">
            <mu-icon slot="left" value="drafts"/>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item slot="nested" title="Inbox" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item title="Drafts" slot="nested">
            <mu-icon slot="left" value="drafts"/>
          </mu-list-item>
        </mu-list-item>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
