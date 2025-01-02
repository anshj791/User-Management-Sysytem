'use client';

import { useUsers } from '@/lib/hooks/use-users';
import { columns } from '@/components/users/columns';
import { DataTable } from '@/components/users/data-table';
import { LoadingState } from '@/components/users/loading-state';
import { ErrorState } from '@/components/users/error-state';

export default function Home() {
  const { data: users, isLoading, error } = useUsers();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>
        
        {isLoading && <LoadingState />}
        {error && <ErrorState />}
        {users && <DataTable columns={columns} data={users} />}
      </div>
    </div>
  );
}