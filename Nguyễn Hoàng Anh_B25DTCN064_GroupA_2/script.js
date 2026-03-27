let toastData = {
    success: {
        title: "Thành công!",
        messages: [
            "Bài viết đã được lưu thành công.",
            "Like đã được ghi nhận.",
            "Bình luận của bạn đã được đăng.",
            "Tải lên hoàn tất!"
        ],
        duration: 4000,
        icon: "✅"
    },

    error: {
        title: "Có lỗi xảy ra!",
        messages: [
            "Kết nối mạng bị gián đoạn.",
            "Không thể lưu thay đổi.",
            "Phiên làm việc đã hết hạn.",
            "Tải lên thất bại."
        ],
        duration: 6000,
        icon: "✖"
    },

    info: {
        title: "Thông tin",
        messages: [
            "Hệ thống sẽ bảo trì lúc 23:00.",
            "Có thông báo mới.",
            "Phiên bản mới đã sẵn sàng."
        ],
        duration: 5000,
        icon: "ℹ"
    },

    warning: {
        title: "Cảnh báo",
        messages: [
            "Phiên đăng nhập sắp hết hạn.",
            "Dung lượng lưu trữ gần đầy.",
            "Bạn đang dùng trình duyệt cũ."
        ],
        duration: 5000,
        icon: "⚠"
    }
};

function showToast(type) {

    let cfg = toastData[type];

    let msg =
        cfg.messages[Math.floor(Math.random() * cfg.messages.length)];

    let container = document.querySelector(".toast-container");

    let toast = document.createElement("div");
    toast.className = "toast " + type;

    toast.innerHTML = `
        <span>${cfg.icon}</span>
        <div class="toast-body">
            <div class="toast-title">${cfg.title}</div>
            <div class="toast-msg">${msg}</div>
        </div>
        <button class="toast-close">✕</button>
        <div class="toast-progress" style="animation-duration:${cfg.duration}ms"></div>
    `;

    toast.querySelector(".toast-close").onclick = function () {
        toast.remove();
    };

    toast.onclick = function () {
        toast.remove();
    };

    container.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, cfg.duration);
}