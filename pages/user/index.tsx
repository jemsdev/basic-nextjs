import Layout from "../../component/layout";

interface UserProps {
  dataUsers: Array<any>;
}
export default function User(props: UserProps) {
  const { dataUsers } = props;
  return (
      <Layout pageTitle="Detail Users">
        {dataUsers.map((user) => (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </>
        ))}
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  }
}
