import ListPostContainer from "../features/Admin/Components/Container/ListPostContainer";
import ListUserContainer from "../features/Admin/Components/Container/ListUserContainer";

export default function AdminDashboard() {
  return (
    <div>
        <ListPostContainer/>
        <ListUserContainer/>
    </div>
  )
}
