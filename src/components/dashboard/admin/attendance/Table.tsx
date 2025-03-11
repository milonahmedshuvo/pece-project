import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { FiChevronLeft } from "react-icons/fi";
import { MdOutlineChevronRight } from "react-icons/md";

interface DataType {
  key: string;
  studentName: string;
  studentId: string;
  enrolledOn: string;
  contact: string;
  attendance: string;
  leaveApplication: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Student Name</span> , 
    dataIndex: 'studentName',
    key: 'studentName',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Student ID</span>,
    dataIndex: 'studentId',
    key: 'studentId',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Enrolled On</span>,
    dataIndex: 'enrolledOn',
    key: 'enrolledOn',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Contact</span>,
    dataIndex: 'contact',
    key: 'contact',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Attendance</span>,
    dataIndex: 'attendance',
    key: 'attendance',
    render: () => (
      <Space size="middle">
        <button className="text-[13px] bg-[#134074] text-white rounded-md px-4 py-0.5 ">Present </button>
        <button className="text-[13px]  text-[#F06D00] border-2 border-[#F06D00] rounded-md px-4 py-0.5 ">Absent</button>
      </Space>
    ),
  },
  {
    title:<span className='!font-[400] !text-[#0B2545] text-[15px]'>Leave Application</span>,
    key: 'leaveApplication',
    dataIndex: 'leaveApplication',
    render: (_, { leaveApplication }) => (
      <>
        {leaveApplication.map((leave) => (
          <Tag
            className={leave === 'Approved' ? '!text-[13px] !bg-[#00D415] !text-white !rounded-md !px-4 !py-0.5 ' : '!text-[13px] !bg-[#FF0000] !text-white !rounded-md !px-4 !py-0.5'}
            key={leave}
          >
            {leave}
          </Tag>
        ))}
      </>
    ),
  },
  
];

const data: DataType[] = [
  {
    key: '1',
    studentName: 'Alice Johnson',
    studentId: 'S12345',
    enrolledOn: '2024-01-15',
    contact: '+1234567890',
    attendance: '95%',
    leaveApplication: ['Approved'],
  },
  {
    key: '2',
    studentName: 'Bob Smith',
    studentId: 'S12346',
    enrolledOn: '2024-02-10',
    contact: '+1987654321',
    attendance: '87%',
    leaveApplication: ['Rejected'],
  },
  {
    key: '3',
    studentName: 'Charlie Brown',
    studentId: 'S12347',
    enrolledOn: '2024-03-05',
    contact: '+1122334455',
    attendance: '90%',
    leaveApplication: ['Rejected'],
  },
  {
    key: '4',
    studentName: 'Brown',
    studentId: 'S12347',
    enrolledOn: '2024-03-05',
    contact: '+22334455',
    attendance: '90%',
    leaveApplication: ['Approved'],
  },
  {
    key: '5',
    studentName: 'Jokey Brown',
    studentId: 'S12347',
    enrolledOn: '2024-03-05',
    contact: '+22334455',
    attendance: '90%',
    leaveApplication: ['Approved'],
  },
];

const TableComponent: React.FC = () => {
  return (
    <div className="pt-4 bg-white rounded-lg shadow overflow-x-auto">
      <Table<DataType>
        columns={columns}
        dataSource={data}
        rowClassName={() => 'hover:bg-gray-100 transition'}
        scroll={{ x: 'max-content' }}
        pagination={{
          position: ['bottomCenter'],
          pageSize: 4,
          className: ' flex  justify-between items-center relative w-full !pt-8  !pb-4 ',
          itemRender: (page, type, originalElement) => {
            if (type === 'prev') {
              return (
                <button className="absolute left-0 h-[26px] flex justify-center text-[13px] ml-8 items-center w-[100px] px-3 bg-[#8DA9C4] text-[#0B2545] rounded-sm  transition">
                  <FiChevronLeft />
                  <span>Previous</span>
                </button>

                
              );
            }
            if (type === 'next') {
              return (
                <button className="absolute right-0 h-[26px] flex justify-center text-[13px] mr-8 items-center w-[100px] px-3 bg-[#8DA9C4] text-[#0B2545] rounded-sm  transition">
                  Next
                  <MdOutlineChevronRight/>
                </button>
              );
            }
            if (type === 'page') {
              return (
                <button
                  className={`px-3 rounded-md transition w-full ${
                    page === 1
                      ? ' h-[30px] text-[#0B2545] bg-[#8DA9C4] border-none '
                      : 'h-[30px]'
                  }`}

                  style={{
                    border: 'none', // Remove the default border
                  }}
                >
                  {page}
                </button>
              );
            }
            return originalElement;
          },
        }}
      />
    </div>
  );
};

export default TableComponent;
