import React from 'react';
import Typography from '@mui/material/Typography';
import BuyerDashboard from '../Buyer/BuyerDashboard';
import VendorDashboard from '../Vendor/VendorDashboard';
import { user_is_authenticated, user_type } from '../../../lib/auth';
import logo from '../../../assets/img/logo.png';


const Home = () => {
    // const matches = useMediaQuery('(min-width:480px)');

    return (
        <div>
            {!user_is_authenticated() ?
                    <div className="welcome-page">
                        <img 
                        src={logo} 
                        alt="Loading..."
                        height="250px"
                        style={{
                            margin: "3rem",
                            marginTop: "20rem",
                            borderRadius: "0px 75px"
                        }}
                        />
                        <Typography className="welcome-heading" variant="h2" component="h1">
                            Welcome to the FoodiZone
                        </Typography>
                        <Typography variant="h6" component="h1">
                            Please login or register to continue
                        </Typography>
                    </div>
                :
                <div>
                    {user_type() === 'buyer' ?
                        <BuyerDashboard />
                        :
                        <VendorDashboard />
                    }
                </div>
            }
        </div>
    );
};

export default Home;
