// 市场数据（示例数据，实际环境中可能需要从API获取）
const marketData = {
    // 全球总市值
    totalMarketCap: "¥19.45T",
    
    // 各板块市值占比
    sectorDistribution: {
        publicChains: 42.5,
        layer2: 8.2,
        defi: 12.3,
        infrastructure: 7.4,
        rwa: 3.1,
        gaming: 5.8,
        social: 4.2,
        ai: 3.5,
        stablecoins: 8.9,
        memecoins: 2.1,
        nft: 1.9,
        others: 0.1
    },
    
    // 近期涨跌幅数据
    recentPerformance: {
        "24h": -0.52,
        "7d": 2.34,
        "30d": 8.76,
        "90d": 15.42
    }
};

// 辅助函数 - 可以用于生成动态数据和更新界面
function updateMarketData() {
    // 更新全球市值显示
    document.getElementById('total-market-cap').textContent = marketData.totalMarketCap;
    
    // 这里可以添加其他数据更新逻辑
    // 例如：生成市值分布图表、更新价格变动等
}

// 页面加载完成后初始化市场数据
document.addEventListener('DOMContentLoaded', function() {
    updateMarketData();
    
    // 模拟市场数据更新（实际环境中可能通过API请求获取）
    setInterval(() => {
        // 在实际应用中，这里应该是一个API请求
        // 此处仅作演示，随机微调总市值
        const randomChange = (Math.random() * 0.02 - 0.01); // -1% 到 +1% 的随机变化
        const currentValue = parseFloat(marketData.totalMarketCap.replace(/[^\d.]/g, ''));
        const newValue = currentValue * (1 + randomChange);
        marketData.totalMarketCap = `¥${newValue.toFixed(2)}T`;
        
        updateMarketData();
    }, 30000); // 每30秒更新一次
});
