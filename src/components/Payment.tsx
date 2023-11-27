import { DialogTitle, DialogContent, DialogContentText, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useAppSelector } from '../rtk/hooks';
import { CartProduct } from '../rtk/cartSlice';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface ShippingDetails {
    address: string,
    contactNumber: string,
    orderType: string
}

interface OrderDetails {
    cartItems: CartProduct[];
    orderTime: string;
    price: number;
    status: string;
    shippingDetails: ShippingDetails;
    userId: string;
}

interface Total {
    total: number | null;
}

 const Payment: React.FC<Total>= ({total})=>  {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const { userId, products } = useAppSelector((state) => state.cart)

    console.log(userId);
    
    const temp: CartProduct[] = products.map((p) => {
        const temp = {
            ...p,
            name: ""+p.name
        }
        return temp
    })

    const orderDetails: OrderDetails = {
        userId,
        cartItems: temp,
        price: total,
        status: "processing",
        orderTime: "2023-11-20T09:30:34.245Z",
        shippingDetails: {
            address,
            contactNumber,
            orderType: "regular"
        }
    }

    function sendOrderDetails() {
        const fetchOrder = async () => {
            try {
                const response = await axios.post(
                    `https://store-back-3.onrender.com/api/orders`, orderDetails
                );
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        };
        fetchOrder();
    }

    const handelSendOrder = () => {
        sendOrderDetails()
    }

    return (
        <Box>
                      <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ color: "white", backgroundColor: "#37474f" }}
          >
            to make an order
          </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DialogTitle variant='h3' color={"black"}>Order Details</DialogTitle>
                    <DialogContent>
                        <DialogContentText color="black">
                            Enter Your Details For Delivery
                        </DialogContentText>
                        <TextField
                            onChange={(e) => {
                                setContactNumber(e.target.value);
                            }}
                            value={contactNumber}
                            autoFocus
                            margin="dense"
                            id="string"
                            label="Phone Number"
                            type="string"
                            fullWidth
                            variant="standard"
                            required
                        />
                        <TextField
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                            value={address}
                            autoFocus
                            margin="dense"
                            id="address"
                            label="Address"
                            type="address"
                            fullWidth
                            variant="standard"
                            required
                        />
                    </DialogContent>
                    <Button onClick={handelSendOrder}>Submit</Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default Payment