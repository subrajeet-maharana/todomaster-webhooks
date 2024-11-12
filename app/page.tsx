import prisma from "./lib/prisma";
export default async function Page() {

  // const users = await prisma.user.findMany();
  return (
    <>
      <h1 className="text-3xl font-semibold">Prisma DataBase</h1>
      <h2 className="text-xl font-medium">All Users</h2>
      {/* {users.map((user) => {
        <div key={user.id}>
          <p>{user.email}</p>
        </div>
      })} */}
    </>
  );
}
