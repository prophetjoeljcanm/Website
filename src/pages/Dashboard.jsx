import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Video, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp,
  BookOpen,
  Plus,
  Loader2,
  Trash2,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import apiService from '../services/api';

const Dashboard = () => {
  const { user } = useAuth();
  const [dbStats, setDbStats] = useState(null);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (user?.role === 'admin') {
        try {
          const [statsData, inquiriesData] = await Promise.all([
            apiService.getDashboardStats(),
            apiService.getRecentInquiries()
          ]);
          setDbStats(statsData);
          setInquiries(inquiriesData);
        } catch (err) {
          console.error('Error fetching dashboard data:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, [user]);

  const handleUpdateStatus = async (id, status) => {
    try {
      await apiService.updateInquiryStatus(id, status);
      setInquiries(inquiries.map(img => img._id === id ? { ...img, status } : img));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const stats = [
    { label: 'Prophetic Classes', value: '12', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Prayer Requests', value: '4', icon: MessageSquare, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Teachings Watched', value: '45', icon: Video, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Spirit Points', value: '1,250', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const adminStats = [
    { label: 'Total Members', value: dbStats?.totalMembers || '0', icon: Users },
    { label: 'Total Teachings', value: dbStats?.totalTeachings || '0', icon: BookOpen },
    { label: 'Pending Requests', value: dbStats?.pendingInquiries || '0', icon: MessageSquare },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-ivory/30">
      <div className="container mx-auto px-6">
        {/* Welcome Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold text-accent-charcoal mb-2">
              Shalom, <span className="text-primary">{user?.name}</span>
            </h1>
            <p className="text-accent-charcoal/60">Welcome to your Kingdom Hub. Your spiritual journey continues here.</p>
          </div>
          <div className="flex gap-4">
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" /> New Prayer Request
            </button>
          </div>
        </motion.div>

        {/* User Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glow-card p-6 rounded-3xl"
            >
              <div className={`p-3 rounded-2xl w-fit mb-4 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-accent-charcoal/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-accent-charcoal">{stat.value}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Admin Section (Conditional) */}
        {user?.role === 'admin' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-accent-charcoal">Ministry Administration</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-primary/20 p-8 rounded-[2.5rem] shadow-xl mb-12">
              {adminStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 border-r last:border-r-0 border-primary/10">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-accent-charcoal">{stat.value}</h4>
                    <p className="text-accent-charcoal/40 text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquiries List */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-primary/10 shadow-lg">
              <h3 className="text-2xl font-bold text-accent-charcoal mb-8">Recent Member Inquiries</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-primary/10">
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-accent-charcoal/40">Member</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-accent-charcoal/40">Type</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-accent-charcoal/40">Status</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-accent-charcoal/40">Date</th>
                      <th className="pb-4 text-xs font-bold uppercase tracking-widest text-accent-charcoal/40">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="py-10 text-center">
                          <Loader2 className="w-8 h-8 text-primary animate-spin mx-auto" />
                        </td>
                      </tr>
                    ) : inquiries.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="py-10 text-center text-accent-charcoal/40 font-bold uppercase tracking-widest text-xs">No inquiries found</td>
                      </tr>
                    ) : inquiries.map((inquiry) => (
                      <tr key={inquiry._id} className="group hover:bg-secondary/10 transition-colors">
                        <td className="py-6">
                          <p className="font-bold text-accent-charcoal">{inquiry.name}</p>
                          <p className="text-xs text-accent-charcoal/60">{inquiry.email}</p>
                        </td>
                        <td className="py-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            inquiry.type === 'prayer' ? 'bg-amber-100 text-amber-600' : 
                            inquiry.type === 'testimony' ? 'bg-emerald-100 text-emerald-600' : 
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {inquiry.type?.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="py-6">
                          <div className="flex items-center gap-2">
                            {inquiry.status === 'pending' ? <Clock className="w-4 h-4 text-amber-500" /> : <CheckCircle className="w-4 h-4 text-emerald-500" />}
                            <span className={`text-xs font-bold uppercase tracking-widest ${inquiry.status === 'pending' ? 'text-amber-500' : 'text-emerald-500'}`}>
                              {inquiry.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-6 text-sm text-accent-charcoal/40">
                          {new Date(inquiry.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-6">
                          <div className="flex gap-2">
                            {inquiry.status === 'pending' && (
                              <button 
                                onClick={() => handleUpdateStatus(inquiry._id, 'reviewed')}
                                className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                                title="Mark as Reviewed"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                            )}
                            <button 
                               className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                               title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Links / Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-accent-charcoal p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            
            <h3 className="text-xl font-bold mb-6 relative z-10">Upcoming Classes</h3>
            <div className="space-y-4 relative z-10">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">Live Tomorrow</span>
                  <span className="text-xs text-white/60">09:00 AM UTC</span>
                </div>
                <h4 className="text-lg font-bold mb-1">Prophetic Insights 101</h4>
                <p className="text-sm text-white/60">Advanced session for Apostolic networks.</p>
              </div>
              
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm opacity-60">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/50">Wednesday</span>
                  <span className="text-xs text-white/60">06:00 PM UTC</span>
                </div>
                <h4 className="text-lg font-bold mb-1">Spirit Realm Navigation</h4>
                <p className="text-sm text-white/60">Guided class on spiritual discernment.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
