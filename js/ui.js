// UI操作モジュール
const UI = {
    // トースト通知
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type} show`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    },

    // モーダル表示
    showModal(modalId) {
        document.getElementById(modalId).classList.add('active');
    },

    // モーダルを閉じる
    closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
    },

    // セクションの表示切り替え
    showSection(sectionName) {
        // ドロップダウンメニューを閉じる
        const dropdown = document.querySelector('.nav-dropdown');
        if (dropdown) {
            dropdown.classList.remove('active');
        }
        
        // セクションの切り替え
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');
        
        // ナビゲーションタブの更新
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // 現在のタブをアクティブにする
        const activeTab = document.querySelector(`.nav-tab[onclick="showSection('${sectionName}')"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // 現在のセクションを記録
        if (window.app) {
            window.app.currentSection = sectionName;
        }
    }
};

// グローバル関数として公開
window.showToast = UI.showToast.bind(UI);
window.showModal = UI.showModal.bind(UI);
window.closeModal = UI.closeModal.bind(UI);
window.showSection = UI.showSection.bind(UI);
