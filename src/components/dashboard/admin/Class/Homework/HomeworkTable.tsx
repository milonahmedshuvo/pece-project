import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { FiChevronLeft } from "react-icons/fi";
import { MdOutlineChevronRight } from "react-icons/md";



interface DataType {
  key: string;
  studentName: string;
  studentId: string;
  subject: string;
  dueDate: string;
  view: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Student Name</span> , 
    dataIndex: 'studentName',
    key: 'studentName',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
    responsive: ['xs', 'sm', 'md', 'lg'],
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Student ID</span>,
    dataIndex: 'studentId',
    key: 'studentId',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
    responsive: ['sm', 'md', ],
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>subject</span>,
    dataIndex: 'subject',
    key: 'subject',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
    responsive: ['xs','sm', 'md', 'lg'],
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>Due Date</span>,
    dataIndex: 'dueDate',
    key: 'dueDate',
    render: (text) => <span className="text-[#0B2545] !font-[600] text-[15px]">{text}</span>,
    responsive: [ 'xs', 'lg'],
  },
  {
    title: <span className='!font-[400] !text-[#0B2545] text-[15px]'>View</span>,
    dataIndex: 'view',
    key: 'view',
    render: () => <button className="text-[15px]  text-[#0B2545] !font-[600] rounded-md  py-0.5 " >View</button>,
    responsive: ['xl']
  },

  
];

const data: DataType[] = [
  {
    key: '1',
    studentName: 'Alice Johnson',
    studentId: 'S12345',
    dueDate: '2024-01-15',
    subject: '+1234567890',
    view: '95%',
  },
  {
    key: '2',
    studentName: 'Bob Smith',
    studentId: 'S12346',
    dueDate: '2024-02-10',
    subject: '+1987654321',
    view: '87%',
  },
  {
    key: '3',
    studentName: 'Charlie Brown',
    studentId: 'S12347',
    dueDate: '2024-03-05',
    subject: '+1122334455',
    view: '90%',
  },
  {
    key: '4',
    studentName: 'Brown',
    studentId: 'S12347',
    dueDate: '2024-03-05',
    subject: '+1122334455',
    view: '90%',
  },
  {
    key: '5',
    studentName: 'Jokey Brown',
    studentId: 'S12347',
    dueDate: '2024-03-05',
    subject: '+1122334455',
    view: '90%',
  },
];

const HomeworkTableComponent: React.FC = () => {
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

export default HomeworkTableComponent;
