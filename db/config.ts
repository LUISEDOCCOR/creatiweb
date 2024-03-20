import { defineDb, defineTable, column} from 'astro:db';

const Pages = defineTable({
  columns:{
    id: column.text({primaryKey: true, unique: true}),
    username: column.text({unique: true}),
    password: column.text()
  }
})

const PageLinks =  defineTable({
  columns:{
    id: column.text({primaryKey: true, unique: true}),
    label: column.text(),
    icon: column.text(),
    link: column.text(),
    page_id: column.text({references: ()=> Pages.columns.id})
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Pages,
    PageLinks
  }
});
