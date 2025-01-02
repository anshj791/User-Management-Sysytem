'use client';

import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Check } from 'lucide-react';

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    enableSorting: false,
    enableHiding: false,
    header: '',
    cell: () => <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="pl-0 font-medium text-gray-900"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <span className="text-gray-900 font-medium">
        {row.getValue('name')}
      </span>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => (
      <span className="text-gray-600">
        {row.getValue('email')}
      </span>
    ),
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: ({ row }) => (
      <span className="text-gray-600">
        {row.getValue('phone')}
      </span>
    ),
  },
  {
    accessorKey: 'website',
    header: 'Website',
    cell: ({ row }) => (
      <span className="text-gray-600">
        {row.getValue('website')}
      </span>
    ),
  },
  {
    accessorKey: 'company.name',
    header: 'Company',
    cell: ({ row }) => (
      <span className="text-gray-600">
        {row.original.company.name}
      </span>
    ),
  },
  {
    accessorKey: 'lastSeen',
    header: 'Last Seen',
    cell: () => (
      <span className="text-gray-600">2 hours ago</span>
    ),
  },
  {
    id: 'status',
    header: 'Status',
    cell: () => (
      <div className="flex items-center gap-2">
        <Check className="h-4 w-4 text-green-500" />
        <span className="text-green-700 font-medium">Approved</span>
      </div>
    ),
  },
];