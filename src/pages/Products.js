import React from 'react';
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import ProductsTable from "../components/products/ProductsTable";
import CategoryDistributionChart from "../components/charts/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

const Products = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Products" />
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    
                    <StatCard name='Total Products' icon={Package} value={1204} color='#6366f1' />
					<StatCard name='Top Selling' icon={TrendingUp} value={89} color='#ef4444' />
					<StatCard name='Low Sotck' icon={AlertTriangle} value={23} color='#f59e08' />
					<StatCard name='Total Reevenue' icon={DollarSign} value={"$783,234"} color='#108981' />

                </motion.div>

                <ProductsTable />
                
                <div className="grid grid-col-1 lg:grid-cols-2 gap-8">

                    <SalesTrendChart />
                    <CategoryDistributionChart/>

                </div>

                </main>
        </div>
    )
}

export default Products;
