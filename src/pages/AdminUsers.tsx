import AdminUsersPanel from '../components/AdminUsersPanel'
import { pageShell } from '../components/ui'

export default function AdminUsers() {
  return (
    <section className={pageShell}>
      <AdminUsersPanel />
    </section>
  )
}
