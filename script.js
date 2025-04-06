document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) {
            // 如果搜索框为空，显示所有板块
            document.querySelectorAll('.market-section').forEach(section => {
                section.style.display = 'block';
            });
            return;
        }
        
        // 搜索板块标题
        document.querySelectorAll('.market-section').forEach(section => {
            const title = section.querySelector('h2').textContent.toLowerCase();
            const description = section.querySelector('.section-header p').textContent.toLowerCase();
            const tokenNames = Array.from(section.querySelectorAll('.token-info h3')).map(el => el.textContent.toLowerCase());
            
            if (title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                tokenNames.some(name => name.includes(searchTerm))) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 添加悬停效果
    document.querySelectorAll('.token-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover:shadow-md');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover:shadow-md');
        });
    });
    
    // 添加点击效果
    document.querySelectorAll('.token-card').forEach(card => {
        card.addEventListener('click', function() {
            const tokenName = this.querySelector('h3').textContent;
            
            // 显示相关信息或跳转（这里只是示例）
            console.log(`查看 ${tokenName} 详情`);
            
            // 添加一个简单的点击动画
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 自适应布局
    function adjustLayout() {
        const width = window.innerWidth;
        const tokenGrids = document.querySelectorAll('.token-grid');
        
        if (width < 640) {
            tokenGrids.forEach(grid => {
                grid.style.gridTemplateColumns = '1fr';
            });
        } else if (width < 1024) {
            tokenGrids.forEach(grid => {
                grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            });
        } else {
            tokenGrids.forEach(grid => {
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
            });
        }
    }
    
    // 初始调整和窗口大小变化时调整
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
