'use client';

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserSearch } from "./user-search";
import { StatusFilter } from "./filters/status-filter";
import { ThemeToggle } from "@/components/theme/theme-toggle";

interface TableHeaderProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusValue: string;
  onStatusChange: (value: string) => void;
}

export function TableHeader({
  searchValue,
  onSearchChange,
  statusValue,
  onStatusChange,
}: TableHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <UserSearch value={searchValue} onChange={onSearchChange} />
        <StatusFilter value={statusValue} onChange={onStatusChange} />
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="outline" className="whitespace-nowrap">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>
    </div>
  );
}