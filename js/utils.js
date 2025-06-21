// ユーティリティ関数

// 日付フォーマット
function formatDate(date, format = 'display') {
    if (format === 'file') {
        return date.toISOString().split('T')[0];
    }
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}/${month}/${day}`;
}

// 日付をキー用の文字列に変換
function formatDateForKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
 // 日付フォーマット
        function formatDate(date, format = 'display') {
            if (format === 'file') {
                return date.toISOString().split('T')[0];
            }
            
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            
            return `${year}/${month}/${day}`;
        }