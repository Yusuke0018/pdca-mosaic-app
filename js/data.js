// データ管理モジュール
const DataManager = {
    // ローカルストレージのキー
    STORAGE_KEYS: {
        IDEAS: 'pdca_ideas',
        PROJECTS: 'pdca_projects', 
        LOGS: 'pdca_logs',
        IMPROVEMENTS: 'pdca_improvements',
        API_KEY: 'pdca_api_key',
        LAST_CHECK_DATE: 'pdca_last_check',
        NOTIFICATION_SETTINGS: 'pdca_notifications'
    },

    // データの読み込み
    loadData() {
        try {
            return {
                ideas: JSON.parse(localStorage.getItem(this.STORAGE_KEYS.IDEAS) || '[]'),
                projects: JSON.parse(localStorage.getItem(this.STORAGE_KEYS.PROJECTS) || '[]'),
                logs: JSON.parse(localStorage.getItem(this.STORAGE_KEYS.LOGS) || '[]'),
                improvements: JSON.parse(localStorage.getItem(this.STORAGE_KEYS.IMPROVEMENTS) || '[]'),
                apiKey: localStorage.getItem(this.STORAGE_KEYS.API_KEY)
            };
        } catch (error) {
            console.error('データの読み込みに失敗しました:', error);
            return null;
        }
    },

    // データの保存
    saveData(data) {
        try {
            localStorage.setItem(this.STORAGE_KEYS.IDEAS, JSON.stringify(data.ideas));
            localStorage.setItem(this.STORAGE_KEYS.PROJECTS, JSON.stringify(data.projects));
            localStorage.setItem(this.STORAGE_KEYS.LOGS, JSON.stringify(data.logs));
            localStorage.setItem(this.STORAGE_KEYS.IMPROVEMENTS, JSON.stringify(data.improvements));
        } catch (error) {
            console.error('データの保存に失敗しました:', error);
        }
    }
};
