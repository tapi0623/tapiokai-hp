"use client";

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table";

export default function Page() {
  return (
    <Table aria-label="table with this site status">
      <TableHeader>
        <TableColumn>日時</TableColumn>
        <TableColumn>想定される影響</TableColumn>
        <TableColumn>内容</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>2025/01/18</TableCell>
          <TableCell>サーバダウン</TableCell>
          <TableCell>
            共通テスト受験に伴い、サーバおよび脳の機能が停止する可能性があります。復旧の見込みは立っていません。
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
