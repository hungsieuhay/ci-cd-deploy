export interface NavBarChild {
  icon?: string;
  title: string;
  desc?: string;
}

export interface NavBarItem {
  id: number;
  label: string;
  child: NavBarChild[];
}

export const navigationData = [
  {
    id: 1,
    label: "Dịch vụ di động",
    child: [
      {
        title: "Chọn số - Mua Sim",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Sắm sim số đẹp, tạo dấu ấn riêng",
      },
      { title: "Kho Sim iTel" },
      { title: "Sim phong thuỷ" },
      { title: "Sim thần số học" },
      { title: "Sim ưu đãi" },
      {
        title: "Gói cước",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Data thả ga, miễn phí gọi nội mạng",
      },
      {
        title: "Nạp thẻ",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Nhanh chóng, thuận tiện, nhiều ưu đãi",
      },
    ],
  },
  {
    id: 2,
    label: "iWow",
    child: [
      {
        title: "Ưu đãi iTel Club",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Đổi điểm tíc tắc nhận ngàn voucher",
      },
      {
        title: "Săn quà iZui",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Chơi game zui, nhận điểm lớn, nhận quà hay",
      },
      {
        title: "Chương trình hot",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Mới ưu đãi nóng khuyến mãi",
      },
    ],
  },
  {
    id: 3,
    label: "iMall",
    child: [
      {
        title: "Điện thoại - Thiết bị",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Sắm đồ công nghệ, ghé shop iTel",
      },
      {
        title: "Thời trang",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Thoả thích shopping, đồ xinh quá trời",
      },
      {
        title: "Mẹ có deal ngon",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Bé có đồ mới",
      },
      {
        title: "Ẩm thực",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Voucher nóng hổi, vừa thổi vừa xơi",
      },
    ],
  },
  {
    id: 4,
    label: "Giải trí",
    child: [
      {
        title: "iTel Film",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Phim hay, xem ngay miễn phí",
      },
      {
        title: "iTel Game",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Làm chủ cuộc chơi, đua top nhận quà",
      },
    ],
  },
  {
    id: 5,
    label: "Dịch vụ số",
    child: [
      {
        title: "iTel Travel",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Săn vé rẻ, đặt phòng nhanh",
      },
      {
        title: "iTel Finance",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Tiết kiệm & vay dễ dàng",
      },
      {
        title: "iTel Health",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Mua bảo hiểm sức khoẻ tại iTel",
      },
      {
        title: "Vietlot",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Ghé Itel, gặp vận đỏ",
      },
    ],
  },
  {
    id: 6,
    label: "Tiện ích hỗ trợ",
    child: [
      {
        title: "Theo dõi đơn hàng",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Cập nhật tình trạng đơn hàng của bạn",
      },
      {
        title: "Kích hoạt sim",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Dành cho khách hàng đăng ký sim mới",
      },
      {
        title: "Mở khoá sim",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Dành cho khách hàng bị khoá Sim",
      },
      {
        title: "Đổi/Cấp lại Sim/eSim",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Dành cho khách hàng cần cấp lại Sim/eSim",
      },
      {
        title: "Cập nhật thông tin thuê bao",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Dễ dàng thay đổi thông tin chính chủ",
      },
      {
        title: "Tải ứng dụng My iTel",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Mở iTel - Một chạm vạn tiện ích",
      },
    ],
  },
  {
    id: 7,
    label: "Hướng dẫn trợ giúp",
    child: [
      {
        title: "Hướng dẫn người dùng",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Đơn giản, dễ hiểu, xem là biết",
      },
      {
        title: "Câu hỏi thường gặp",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Bạn hỏi iTel trả lời",
      },
      {
        title: "Liên hệ",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Giải đáp rõ ràng, hỗ trợ nhanh chóng",
      },
      {
        title: "Phản hồi - Góp ý",
        icon: "/icons/bold/sim-bold.svg",
        desc: "iTel sẵn sàng nhận góp ý của bạn",
      },
      {
        title: "Danh sách đại lý  ",
        icon: "/icons/bold/sim-bold.svg",
        desc: "Điểm cung cấp dịch vụ viễn thông",
      },
    ],
  },
] as NavBarItem[];
