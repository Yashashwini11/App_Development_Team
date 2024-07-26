import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const AdminManageUsers = () => {
  const [open, setOpen] = useState(false);
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "Password123",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "JanePass456",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      password: "Emily789",
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      password: "MikePass321",
    },
    {
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      password: "Sarah987",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      password: "DavePass654",
    },
    
  ];

  return (
    <div className="m-1 p-20">
      <Card className="shadow-sm shadow-primary">
        <CardHeader className="w-full flex flex-row justify-between items-center">
          <CardTitle>Users</CardTitle>
          <Button onClick={() => setOpen(!open)}>
            <Plus className="h-5 w-5 mr-2" /> Add
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell className="text-center">
                    <span className="w-full h-full flex justify-center items-center gap-3">
                      <Edit className="h-5 w-5 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md" />
                      <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md" />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className="flex flex-col items-center gap-4">
            <Button className="w-1/2 bg-red-400/90 hover:bg-red-400" onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className="w-1/2">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminManageUsers;
