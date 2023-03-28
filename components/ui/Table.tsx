import Link from "next/link";
import React from "react";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	const noticeID = data.map(e => {
		return e.id;
	});

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => {
					const { key, ...restHeaderGroupProps } =
						headerGroup.getHeaderGroupProps();
					return (
						<tr key={key} {...restHeaderGroupProps}>
							{headerGroup.headers.map(column => {
								const { key, ...restColumn } = column.getHeaderProps();
								return (
									<th key={key} {...restColumn}>
										{column.render("Header")}
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			<tbody {...getTableBodyProps}>
				{rows.map(row => {
					console.log(row);
					console.log(noticeID);
					prepareRow(row);
					const { key, ...restRowProps } = row.getRowProps();
					return (
						<tr key={key} {...restRowProps}>
							<Link
								href="/community/notice/[noticeId]"
								as={`/community/notice/${noticeID[row.id]}`}
							>
								{row.cells.map(cell => {
									const { key, ...restCellProps } = cell.getCellProps();
									return (
										<td key={key} {...restCellProps}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</Link>
							;
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
