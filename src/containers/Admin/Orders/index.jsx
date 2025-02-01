
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api.js';
import { orderStatusOptions } from './ordersStatus.js'
import { Filter, FilterOption} from './styles.js';


export function Orders() {
  const [orders, setOrders] = useState([]);//BACKUP
  const [filteredOrders, setFilteredOrders] = useState([]);// OS VALORES QUE ESTÃO NA TELA
  const [activeSts, setActiveSts] = useState(0);

  const  [rows, setRows] = useState([]);

  useEffect(() => {
    async function loadOrders(){
      const {data} = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data);
    }
    loadOrders();

  },
  []);
  
  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products, 
    };
  }
  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  },[filteredOrders]);

  function handletStatus(status){
    if (status.id === 0) {
      setFilteredOrders(orders);
    }else {
     const newOrders = orders.filter((order) => order.status === status.value);

     setFilteredOrders(newOrders);
    }
    setActiveSts(status.id);
  }
  
  return (
    <>
     <Filter>
      {orderStatusOptions.map((status) => (
        <FilterOption key={status.id} 
        onClick={() => handletStatus(status)}
        $isActiveSts={activeSts === status.id}
        >
          {status.label}
        </FilterOption>
      ))}
      </Filter>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedidos</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Data do pedido</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row 
            key={row.orderId} 
            row={row} 
            orders={orders}
            setOrders={setOrders}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
