import { defineDb, defineTable, column, TRUE } from 'astro:db';

const Pages = defineTable({
  columns:{
    id: column.text({primaryKey: true, unique: true}),
    username: column.text({unique: true}),
    password: column.text()
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    Pages
  }
});
