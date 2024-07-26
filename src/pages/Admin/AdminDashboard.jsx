import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { DollarSign, ShoppingBag, User, Users } from "lucide-react";
import { Table } from "../../components/ui/table";
import { TableContent } from "../../components/Admin/TableContent";
import BarChartsss from "../../components/Admin/BarChartsss";
const AdminDashboard = () => {
  return (
    <>
      <div className="h-1/4 w-full bg-slate-500 flex flex-row p-4 gap-4">
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10000</div>
          </CardContent>
        </Card>
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9999</div>
          </CardContent>
        </Card>
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingBag className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000</div>
          </CardContent>
        </Card>
        <Card className="w-1/4 border border-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000,00</div>
          </CardContent>
        </Card>
        {/* <Table /> */}
      </div>
      <div className="w-2/3 flex justify-center items-center">
        <BarChartsss />
      </div>
      <div className="h-3/4 w-full flex justify-center items-center">
        <TableContent />
      </div>
    </>
  );
};

export default AdminDashboard;
