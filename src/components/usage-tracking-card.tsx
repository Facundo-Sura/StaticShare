"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Image as ImageIcon, Video, Code } from "lucide-react";

const data = [
  { name: 'Jan', usage: 400 },
  { name: 'Feb', usage: 300 },
  { name: 'Mar', usage: 600 },
  { name: 'Apr', usage: 800 },
  { name: 'May', usage: 500 },
  { name: 'Jun', usage: 700 },
];

export function UsageTrackingCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Usage Tracking</CardTitle>
        <CardDescription>Overview of your data and bandwidth usage.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div className="p-4 bg-secondary rounded-lg">
                <h4 className="text-muted-foreground font-medium flex items-center gap-2"><ImageIcon className="w-4 h-4" /> Images</h4>
                <p className="text-2xl font-bold">12.5 GB</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
                <h4 className="text-muted-foreground font-medium flex items-center gap-2"><Video className="w-4 h-4" /> Videos</h4>
                <p className="text-2xl font-bold">45.2 GB</p>
            </div>
             <div className="p-4 bg-secondary rounded-lg">
                <h4 className="text-muted-foreground font-medium flex items-center gap-2"><Code className="w-4 h-4" /> Assets</h4>
                <p className="text-2xl font-bold">2.1 GB</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
                <h4 className="text-muted-foreground font-medium flex items-center gap-2"><Database className="w-4 h-4" /> Databases</h4>
                <p className="text-2xl font-bold">8.7 GB</p>
            </div>
        </div>

        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', opacity: 0.5 }}
                contentStyle={{ 
                  background: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))', 
                  borderRadius: 'var(--radius)' 
                }}
              />
              <Bar dataKey="usage" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
