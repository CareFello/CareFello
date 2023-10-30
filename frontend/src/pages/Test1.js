import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table';
import { Table, Pagination, Form, Button, Row, Col } from 'react-bootstrap';
import { FaTrash,FaSortUp, FaSortDown } from 'react-icons/fa';

const MyTable = ({ columns, data, onRemove }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { selectedRowIds, pageIndex, pageSize },
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination,
    useRowSelect
  );

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
  Object.values(row).some((value) =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  )
);
  }, [data, searchTerm]);

  const [pageSizeOptions, setPageSizeOptions] = useState([10, 20, 30, 40, 50]); // Add this line

  return (
    <div>
      <Row className="mb-3">
  <Col>
    <Form.Control
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearch}
      style={{ width: '300px', marginLeft: '750px'}} // Adjust the width as needed
    />
  </Col>
</Row>

      <Table {...getTableProps()} striped bordered hover responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
  {headerGroup.headers.map((column) => (
    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'black',
                      cursor: 'pointer',
                      fontSize: '13px', // Add this line for font size
                    }}
                  >
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown style={{ color: 'black', backgroundColor: 'transparent', border: 'none', fontSize: '13px'}} />
                      ) : (
                        <FaSortUp style={{ color: 'black',backgroundColor: 'transparent', border: 'none', fontSize: '13px'}} />
                      )
                    ) : (
                      ' 🔽🔼'
                    )}
                  </button>
                </th>
  ))}
  <th>Action</th>
</tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
      {row.cells.map((cell) => (
        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
      ))}
      <td>
      <Button
          variant="danger"
          onClick={() => onRemove(row.original.id)}
          style={{ backgroundColor: 'transparent', border: 'none', fontSize: '13px' }}
        >
          <FaTrash style={{ color: 'red' }} />
        </Button>
      </td>
    </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination style={{fontSize: '13px',size: '20px' }}>
        <Pagination.Prev onClick={() => previousPage()} />
        <Pagination.Next onClick={() => nextPage()} />
        <Pagination.Item>Page {pageIndex + 1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>
          <Form.Control style={{ fontSize: '13px', border: "none" ,
         
        padding: '0.3rem 0.5rem',  // Adjust the padding to change button size
      
          }}
          
            as="select" 
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </Form.Control>
        </Pagination.Item>
      </Pagination>
    </div>
  );
};



const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Smith', age: 25, city: 'New York', country: 'USA', date: new Date('2023-01-01') },
  { id: 2, name: 'Jane Doe', age: 30, city: 'Los Angeles', country: 'USA', date: new Date('2023-02-01') },
  { id: 3, name: 'Mike Johnson', age: 22, city: 'Chicago', country: 'USA', date: new Date('2023-03-01') },
  { id: 4, name: 'Emily White', age: 28, city: 'Houston', country: 'USA', date: new Date('2023-04-01') },
  { id: 5, name: 'Brian Wilson', age: 35, city: 'Phoenix', country: 'USA', date: new Date('2023-05-01') },
  { id: 6, name: 'Sophia Brown', age: 29, city: 'Philadelphia', country: 'USA', date: new Date('2023-06-01') },
  { id: 7, name: 'Daniel Miller', age: 26, city: 'San Antonio', country: 'USA', date: new Date('2023-07-01') },
  { id: 8, name: 'Olivia Taylor', age: 31, city: 'San Diego', country: 'USA', date: new Date('2023-08-01') },
  { id: 9, name: 'Ethan Moore', age: 27, city: 'Dallas', country: 'USA', date: new Date('2023-09-01') },
  { id: 10, name: 'Ava Davis', age: 24, city: 'San Jose', country: 'USA', date: new Date('2023-10-01') },
  { id: 11, name: 'Matthew Anderson', age: 33, city: 'Austin', country: 'USA', date: new Date('2023-11-01') },
  { id: 12, name: 'Emma Wilson', age: 23, city: 'Jacksonville', country: 'USA', date: new Date('2023-12-01') },
  { id: 13, name: 'Christopher Hall', age: 34, city: 'Indianapolis', country: 'USA', date: new Date('2024-01-01') },
  { id: 14, name: 'Grace Martin', age: 32, city: 'San Francisco', country: 'USA', date: new Date('2024-02-01') },
  { id: 15, name: 'Andrew Clark', age: 26, city: 'Columbus', country: 'USA', date: new Date('2024-03-01') },
  { id: 16, name: 'Mia Turner', age: 28, city: 'Charlotte', country: 'USA', date: new Date('2024-04-01') },
  { id: 17, name: 'Nathan Lewis', age: 29, city: 'Fort Worth', country: 'USA', date: new Date('2024-05-01') },
  { id: 18, name: 'Hannah Adams', age: 30, city: 'Detroit', country: 'USA', date: new Date('2024-06-01') },
  { id: 19, name: 'James Parker', age: 27, city: 'El Paso', country: 'USA', date: new Date('2024-07-01') },
  { id: 20, name: 'Lily Martinez', age: 25, city: 'Memphis', country: 'USA', date: new Date('2024-08-01') },
  { id: 21, name: 'David Young', age: 31, city: 'Seattle', country: 'USA', date: new Date('2024-09-01') },
  { id: 22, name: 'Chloe Hernandez', age: 24, city: 'Denver', country: 'USA', date: new Date('2024-10-01') },
  { id: 23, name: 'Joseph Foster', age: 32, city: 'Washington', country: 'USA', date: new Date('2024-11-01') },
  { id: 24, name: 'Avery Brooks', age: 26, city: 'Boston', country: 'USA', date: new Date('2024-12-01') },
  { id: 25, name: 'Ella Price', age: 28, city: 'Nashville', country: 'USA', date: new Date('2025-01-01') },
  { id: 26, name: 'Tyler Reed', age: 29, city: 'Baltimore', country: 'USA', date: new Date('2025-02-01') },
  { id: 27, name: 'Aiden Rogers', age: 30, city: 'Oklahoma City', country: 'USA', date: new Date('2025-03-01') },
  { id: 28, name: 'Zoe Turner', age: 27, city: 'Louisville', country: 'USA', date: new Date('2025-04-01') },
  { id: 29, name: 'Carter Murphy', age: 25, city: 'Portland', country: 'USA', date: new Date('2025-05-01') },
  { id: 30, name: 'Sofia Mitchell', age: 33, city: 'Las Vegas', country: 'USA', date: new Date('2025-06-01') },

  ]);

  const columns = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'City', accessor: 'city' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Date', accessor: 'date', Cell: ({ value }) => new Date(value).toLocaleDateString() },
  ];

  const handleRemove = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };

  return (
    <div className='Test1' style={{ margin: '200px' }}>
      
      <MyTable columns={columns} data={data} onRemove={handleRemove} />
    </div>
  );
};

export default App;
