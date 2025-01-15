import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import SalesOverviewChart from "../components/charts/SalesOverviewChart";
import {overallSales} from "../components/charts/SalesOverviewChart";
import CategoryDistributionChart from "../components/charts/CategoryDistributionChart";
import SalesChannelChart from "../components/charts/SalesChannelChart";

const Overview = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10 ">
            <Header title="Oveview" />
            
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    
                    <StatCard name='Total Sales' icon={Zap} value={overallSales} color='dodgerblue' />
					<StatCard name='New Users' icon={Users} value='433' color='#8B5CF6' />
					<StatCard name='Total Products' icon={ShoppingBag} value='837' color='#EC4899' />
					<StatCard name='Conversion Rate' icon={BarChart2} value='10%' color='#10B981' />

                </motion.div>
                
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div>

            </main>
        </div>
    )
}

export default Overview;