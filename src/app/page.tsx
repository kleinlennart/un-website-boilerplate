import { Header } from "@/components/Header";
import { getCurrentUser } from "@/lib/auth";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <main className="min-h-screen bg-background px-6 py-8">
      <div className="mx-auto max-w-4xl">
        <Header user={user} />
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Welcome{user?.entity ? `, ${user.entity}` : ""}!</h2>
          <p className="text-gray-600">You are signed in as {user?.email}.</p>
        </div>
      </div>
    </main>
  );
}
