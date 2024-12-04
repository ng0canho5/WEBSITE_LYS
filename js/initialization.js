//Khoi tao danh sach san pham
function createProduct() {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Vòng cổ bạc “Silver Luna”',
            img: './assets/img/products/dc001.jpg',
            category: 'Dây chuyền',
            price: 200000,
            desc:  `<strong>Mã sản phẩm:</strong> DC001<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, trẻ trung, tinh tế và sắc sảo.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },
        {
            id: 2,
            status: 1, 
            title: 'Vòng cổ bạc “Lady Bow”',
            img: './assets/img/products/dc002.jpg',
            category: 'Dây chuyền',
            price: 185000,
            desc:  `<strong>Mã sản phẩm:</strong> DC002<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Biểu tượng của vẻ đẹp tinh tế, dịu dàng tô đậm nét đẹp của những nàng thơ.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },
        {
            id: 3,
            status: 1, 
            title: 'Vòng cổ “Twinkling Circle”',
            img: './assets/img/products/dc003.jpg',
            category: 'Dây chuyền',
            price: 185000,
            desc:  `<strong>Mã sản phẩm:</strong> DC003<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Lấy cảm hứng từ nhân vật nàng tiên cá, mang đến vẻ đẹp quyến rũ và huyền bí.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },
        {
            id: 4,
            status: 1, title: 'Vòng cổ “Pink Heart”',
            img: './assets/img/products/dc004.jpg',
            category: 'Dây chuyền',
            price: 210000,
            desc:  `<strong>Mã sản phẩm:</strong> DC004<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Sợi dây mắt xích mix mặt đá tim thạch hồng ngọt ngào, nhẹ nhàng, tinh tế.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },
        {
            id: 5,
            status: 1, 
            title: 'Vòng cổ “Mystery Moonie”',
            img: './assets/img/products/dc005.jpg',
            category: 'Dây chuyền',
            price: 185000,
            desc:  `<strong>Mã sản phẩm:</strong> DC005<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Sự kết hợp giữa mặt trăng ôm trọn viên đá lấp lánh mang lại vẻ đẹp tinh tế và năng lượng tỏa sáng.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },

        {
            id: 6,
            status: 1, 
            title: 'Vòng cổ “Oris”',
            img: './assets/img/products/dc006.jpg',
            category: 'Dây chuyền',
            price: 185000,
            desc:  `<strong>Mã sản phẩm:</strong> DC006<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Viên đá chủ đạo mang lại cảm giác tươi mới, thu hút ánh nhìn.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },

        {
            id: 7,
            status: 1, 
            title: 'Vòng cổ “Smiling Flower”',
            category: 'Dây chuyền',
            img: './assets/img/products/dc007.jpg',
            price: 185000,
            desc:  `<strong>Mã sản phẩm:</strong> DC007<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Hình mặt cười hoa, biểu tượng của niềm vui và hạnh phúc, mang đến may mắn và năng lượng tích cực.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },

        {
            id: 8,
            status: 1, 
            title: 'Vòng cổ “Swan Grace”',
            img: './assets/img/products/dc008.jpg',
            category: 'Dây chuyền',
            price: 202000,
            desc:  `<strong>Mã sản phẩm:</strong> DC008<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Dây chuyền bạc thanh lịch, thiết kế hình thiên nga uyển chuyển, mang đến vẻ đẹp ngọt ngào và lãng mạn.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },

        {
            id: 9,
            status: 1, 
            title: 'Vòng cổ “Blossom Leaf”',
            img: './assets/img/products/dc009.jpg',
            category: 'Dây chuyền',
            price: 230000,
            desc:  `<strong>Mã sản phẩm:</strong> DC010<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Mẫu dây chuyền lá cây độc đáo, thiết kế hai tầng, tạo điểm nhấn cho mọi outfit.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },

        {
            id: 10,
            status: 1, 
            title: 'Vòng cổ “Minimalist Grace”',
            img: './assets/img/products/dc010.jpg',
            category: 'Dây chuyền',
            price: 180000,
            desc:  `<strong>Mã sản phẩm:</strong> DC010<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế mảnh mai, thanh lịch, tôn lên nét đẹp tinh tế của người đeo.<br>  
                    <strong>Chiều dài:</strong> 40 + 5 cm (điều chỉnh được).`  
        },

        //Vòng tay
        {
            id: 11,
            status: 1, 
            title: 'Vòng tay bạc “Silver Serenity”',
            img: './assets/img/products/vt001.png',
            category: 'Vòng tay',
            price: 200000,
            desc:  `<strong>Mã sản phẩm:</strong> VT001<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, trẻ trung, tinh tế, sắc sảo.<br>`  
        },

        {
            id: 12,
            status: 1, 
            title: 'Vòng tay bạc “Timeless Silver”',
            img: './assets/img/products/vt002.png',
            category: 'Vòng tay',
            price: 230000,
            desc:  `<strong>Mã sản phẩm:</strong> VT002<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế sang trọng cùng với điểm nhấn chiếc lá.<br>`  
        },

        {
            id: 13,
            status: 1, 
            title: 'Vòng tay bạc “Willow Silver”',
            img: './assets/img/products/vt003.png',
            category: 'Vòng tay',
            price: 240000,
            desc:  `<strong>Mã sản phẩm:</strong> VT003<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, đường nét tinh xảo, sáng bóng.<br>`  
        },

        {
            id: 14,
            status: 1, 
            title: 'Vòng tay bạc “Eternal Bond”',
            img: './assets/img/products/vt004.png',
            category: 'Vòng tay',
            price: 190000,
            desc:  `<strong>Mã sản phẩm:</strong> VT004<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế mảnh, sang trọng.<br>`  
        },

        {
            id: 15,
            status: 1, 
            title: 'Vòng tay bạc “Aurora Silver”',
            img: './assets/img/products/vt005.png',
            category: 'Vòng tay',
            price: 300000,
            desc:  `<strong>Mã sản phẩm:</strong> VT005<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, trẻ trung, tinh tế, sắc sảo.<br>`  
        },

        {
            id: 16,
            status: 1, 
            title: 'Vòng tay bạc “Silver Promise”',
            img: './assets/img/products/vt006.jpg',
            category: 'Vòng tay',
            price: 280000,
            desc:  `<strong>Mã sản phẩm:</strong> VT006<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế nhỏ xinh cùng với cỏ 4 lá đem lại sự may mắn.<br>`  
        },

        {
            id: 17,
            status: 1, 
            title: 'Vòng tay bạc “Silver Mirage”',
            img: './assets/img/products/vt007.png',
            category: 'Vòng tay',
            price: 310000,
            desc:  `<strong>Mã sản phẩm:</strong> VT007<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế tinh tế, những viên đá lấp lánh đem lại sự sang trọng cho sản phẩm.<br>`  
        },

        {
            id: 18,
            status: 1, 
            title: ' Vòng tay bạc “Silver Daisy”',
            img: './assets/img/products/vt008.png',
            category: 'Vòng tay',
            price: 350000,
            desc:  `<strong>Mã sản phẩm:</strong> VT008<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, trẻ trung, tinh tế, sắc sảo.<br>`  
        },

        {
            id: 19,
            status: 1, 
            title: 'Vòng tay bạc “Noble Gleam”',
            img: './assets/img/products/vt009.png',
            category: 'Vòng tay',
            price: 180000,
            desc:  `<strong>Mã sản phẩm:</strong> VT009<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, trẻ trung, tinh tế, sắc sảo.<br>`  
        },

        {
            id: 20,
            status: 1, 
            title: 'Vòng tay bạc “Silver Star”',
            img: './assets/img/products/vt010.png',
            category: 'Vòng tay',
            price: 260000,
            desc:  `<strong>Mã sản phẩm:</strong> VT010<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế đơn giản nhưng không kém phần tinh tế.<br>`  
        },

        {
            id: 21,
            status: 1, 
            title: 'Vòng tay bạc “Dreamer’s Star”',
            img: './assets/img/products/vt011.png',
            category: 'Vòng tay',
            price: 160000,
            desc:  `<strong>Mã sản phẩm:</strong> VT011<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, điểm nhấn là chiếc nơ độc đáo.<br>`  
        },

        //Nhẫn
        {
            id: 22,
            status: 1, 
            title: 'Nhẫn “Snow Princess”',
            img: './assets/img/products/n001.jpg',
            category: 'Nhẫn',
            price: 108000,
            desc:  `<strong>Mã sản phẩm:</strong> N001<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế 3 viên đá tinh xảo, mang đến vẻ đẹp sang trọng và quý phái cho phái đẹp, không đụng hàng, giúp bạn nổi bật mọi lúc mọi nơi.<br>
                    <strong>Kích cỡ:</strong><br>
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br> 
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },

        {
            id: 23,
            status: 1, 
            title: 'Nhẫn “Classic Silver”',
            img: './assets/img/products/n002.jpg',
            category: 'Nhẫn',
            price: 49000,
            desc:  `<strong>Mã sản phẩm:</strong> N002<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác theo công nghệ Bạc Ý), hàng gia công, không han gỉ, không bị đen, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Tạo nên phong cách riêng của bạn với bộ nhẫn bạc đơn giản nhưng không kém phần tinh tế.<br>
                    <strong>Kích cỡ:</strong><br>
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br> 
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },

        {  
            id: 24,  
            status: 1,  
            title: 'Nhẫn “Ocean Dream”',  
            img: './assets/img/products/n003.jpg',  
            category: 'Nhẫn',  
            price: 99000,  
            desc:  `<strong>Mã sản phẩm:</strong> N003<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh mảnh, đính đá dọc tinh tế, mang đến vẻ đẹp đơn giản nhưng không kém phần sang trọng.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        {  
            id: 25,  
            status: 1,  
            title: 'Nhẫn “Dainty Blossom”',  
            img: './assets/img/products/n004.jpg',  
            category: 'Nhẫn',  
            price: 119000,  
            desc:  `<strong>Mã sản phẩm:</strong> N004<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh mảnh, uốn lượn mềm mại. Viên đá trung tâm lấp lánh như viên ngọc quý, cùng với những viên đá nhỏ bao quanh tạo nên vẻ đẹp tinh tế, nữ tính.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        {  
            id: 26,  
            status: 1,  
            title: 'Nhẫn “Whimsy Wave”',  
            img: './assets/img/products/n005.jpg',  
            category: 'Nhẫn',  
            price: 59000,  
            desc:  `<strong>Mã sản phẩm:</strong> N005<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Với thiết kế đơn giản, dễ phối đồ, mang đến vẻ đẹp vừa cá tính vừa sang trọng.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        {  
            id: 27,  
            status: 1,  
            title: 'Nhẫn “Queen’s Crown”',  
            img: './assets/img/products/n006.jpg',  
            category: 'Nhẫn',  
            price: 139000,  
            desc:  `<strong>Mã sản phẩm:</strong> N006<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Nhẫn vương miện tinh xảo - Nhấn mạnh vào sự tỉ mỉ trong từng chi tiết của chiếc nhẫn.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        {  
            id: 28,  
            status: 1,  
            title: 'Nhẫn “Rose Blossom”',  
            img: './assets/img/products/n007.jpg',  
            category: 'Nhẫn',  
            price: 99000,  
            desc:  `<strong>Mã sản phẩm:</strong> N007<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Một chiếc nhẫn bạc mang phong cách cổ điển với một đường cong tinh tế của dải hoa đính đá cao cấp, giống như một bông hồng đang nở.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        {  
            id: 29,  
            status: 1,  
            title: 'Nhẫn “Butterfly Wings”',  
            img: './assets/img/products/n008.jpg',  
            category: 'Nhẫn',  
            price: 139000,  
            desc:  `<strong>Mã sản phẩm:</strong> N008<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế con bướm nhỏ nhắn, tượng trưng cho sự tự do và niềm vui. Thiết kế mở mang đến một chút tinh nghịch cho món đồ tối giản này.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        {  
            id: 30,  
            status: 1,  
            title: 'Nhẫn “Infinity Love”',  
            img: './assets/img/products/n009.jpg',  
            category: 'Nhẫn',  
            price: 129000,  
            desc:  `<strong>Mã sản phẩm:</strong> N009<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Một chiếc nhẫn tối giản nhưng thanh lịch với thiết kế mở, điểm nhấn là biểu tượng vô cực được trang trí bằng đá.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  
        
        {  
            id: 31,  
            status: 1,  
            title: 'Nhẫn “Little Ring”',  
            img: './assets/img/products/n010.jpg',  
            category: 'Nhẫn',  
            price: 109000,  
            desc:  `<strong>Mã sản phẩm:</strong> N010<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Tối giản nhưng thanh lịch với một dải cong được trang trí bằng đá.<br>  
                    <strong>Kích cỡ:</strong><br>  
                    - Size 1.5: Chu vi từ 4.6 đến 4.9 cm, đường kính 1.5 cm<br>  
                    - Size 1.6: Chu vi từ 5.0 đến 5.2 cm, đường kính 1.6 cm<br>  
                    - Size 1.7: Chu vi từ 5.3 đến 5.5 cm, đường kính 1.7 cm<br>  
                    - Size 1.8: Chu vi từ 5.6 đến 5.8 cm, đường kính 1.8 cm<br>  
                    - Size 1.9: Chu vi từ 5.9 đến 6.1 cm, đường kính 1.9 cm<br>  
                    - Size 2.0: Chu vi từ 6.2 đến 6.4 cm, đường kính 2.0 cm<br>`  
        },  

        //Khuyên tai
        {  
            id: 32,  
            status: 1,  
            title: 'Khuyên tai bạc “Elegant Bow”',  
            img: './assets/img/products/kt001.JPG',  
            category: 'Khuyên tai',  
            price: 160000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT001<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế thanh lịch, trẻ trung, tinh tế, sắc sảo.<br>`  
        }, 
        
        {  
            id: 33,  
            status: 1,  
            title: 'Khuyên tai bạc “Ivy”',  
            img: './assets/img/products/kt002.png',  
            category: 'Khuyên tai',  
            price: 150000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT002<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế trẻ trung, tinh tế nhưng không kém phần sang trọng.<br>`  
        }, 

        {  
            id: 34,  
            status: 1,  
            title: 'Khuyên tai bạc “Lucky”',  
            img: './assets/img/products/kt003.png',  
            category: 'Khuyên tai',  
            price: 180000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT003<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), an toàn cho da, dễ làm sáng, không gỉ màu.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế tinh tế, mang lại vẻ đẹp nhẹ nhàng và ý nghĩa.<br>`  
        },  

        {  
            id: 35,  
            status: 1,  
            title: 'Khuyên tai bạc “Softwing”',  
            img: './assets/img/products/kt004.png',  
            category: 'Khuyên tai',  
            price: 145000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT004<br>  
                    <strong>Chất liệu:</strong> Bạc S925 cao cấp, không gỉ sét, dễ bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế với vẻ đẹp mềm mại, thanh thoát và tinh tế, duyên dáng.<br>`  
        },  

        {  
            id: 36,  
            status: 1,  
            title: 'Khuyên tai bạc “Astrid”',  
            img: './assets/img/products/kt005.png',  
            category: 'Khuyên tai',  
            price: 100000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT005<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế hiện đại, nổi bật và mang nhiều ý nghĩa biểu tượng.<br>`  
        },  

        {  
            id: 37,  
            status: 1,  
            title: 'Khuyên tai bạc “Nova”',  
            img: './assets/img/products/kt006.png',  
            category: 'Khuyên tai',  
            price: 130000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT006<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế sang trọng, hiện đại.<br>`  
        },  

        {  
            id: 38,  
            status: 1,  
            title: 'Khuyên tai bạc “Wishstar”',  
            img: './assets/img/products/kt007.png',  
            category: 'Khuyên tai',  
            price: 170000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT007<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế tinh tế, đơn giản.<br>`  
        },  

        {  
            id: 39,  
            status: 1,  
            title: 'Khuyên tai bạc “Camellia”',  
            img: './assets/img/products/kt008.png',  
            category: 'Khuyên tai',  
            price: 150000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT008<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế sang trọng, tinh tế.<br>`  
        },  

        {  
            id: 40,  
            status: 1,  
            title: 'Khuyên tai bạc “Butterfly”',  
            img: './assets/img/products/kt009.png',  
            category: 'Khuyên tai',  
            price: 200000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT009<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thể hiện sự duyên dáng và phong cách nữ tính.<br>`  
        },  

        {  
            id: 41,  
            status: 1,  
            title: 'Khuyên tai bạc “Floria”',  
            img: './assets/img/products/kt010.png',  
            category: 'Khuyên tai',  
            price: 190000,  
            desc:  `<strong>Mã sản phẩm:</strong> KT010<br>  
                    <strong>Chất liệu:</strong> Bạc S925 (92,5% Bạc và 7,5% kim loại khác sản xuất theo công nghệ Bạc Ý), hàng gia công kĩ bóng đẹp, không han gỉ, không dị ứng, dễ làm sáng và bảo quản.<br>  
                    <strong>Kiểu dáng:</strong> Thiết kế tinh tế, phù hợp với những người yêu thích phong cách nhẹ nhàng nhưng cũng đầy ý nghĩa.<br>`  
        },

        //Handmade
        {  
            id: 42,  
            status: 1,  
            title: 'Vòng tay “Breath of the forest”',  
            img: './assets/img/products/hm001.png',  
            category: 'Handmade',  
            price: 40000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM001<br>  
                    <strong>Mô tả:</strong> Vòng tay nhẹ nhàng, tinh tế với dây dù màu kem, điểm xuyết các hạt đá và charm lá xanh, nổi bật với bông hoa nhỏ màu ngọc. Mang hơi thở thiên nhiên, phù hợp cho những ai yêu thích sự thanh khiết và gần gũi với rừng cây `
        },

        {  
            id: 43,  
            status: 1,  
            title: 'Vòng tay “Lavender Whisper”',  
            img: './assets/img/products/hm002.png',  
            category: 'Handmade',  
            price: 40000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM002<br>  
                    <strong>Mô tả:</strong> Vòng tay dây dù màu kem với các hạt đá trong suốt và tím pastel, nổi bật với charm hoa lavender. Mang vẻ đẹp nhẹ nhàng, thanh thoát, phù hợp với phong cách nữ tính và lãng mạn.<br>`  
        },  
        {  
            id: 44,  
            status: 1,  
            title: 'Vòng tay “Wave to Sea”',  
            img: './assets/img/products/hm003.png',  
            category: 'Handmade',  
            price: 35000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM003<br>  
                    <strong>Mô tả:</strong> Vòng tay dây dù đen kết hợp hạt đá trong suốt và xanh ngọc, nổi bật với charm ngôi sao bạc. Thiết kế tinh tế, mang hơi thở đại dương, phù hợp với phong cách năng động, cá tính.<br>`  
        },  
        {  
            id: 45,  
            status: 1,  
            title: 'Vòng tay “Wave to Earth”',  
            img: './assets/img/products/hm004.png',  
            category: 'Handmade',  
            price: 42000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM004<br>  
                    <strong>Mô tả:</strong> Vòng tay dây dù nâu kết hợp hạt đá xanh lá và nâu đất, điểm nhấn với charm ngôi sao hoặc lá cây. Thiết kế mộc mạc, tinh tế, mang hơi thở thiên nhiên, phù hợp với phong cách nhẹ nhàng, gần gũi.<br>`  
        },  
        {  
            id: 46,  
            status: 1,  
            title: 'Vòng cổ “Lily Raindrop”',  
            img: './assets/img/products/hm005.png',  
            category: 'Handmade',  
            price: 50000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM005<br>  
                    <strong>Mô tả:</strong> Vòng cổ dây hạt trắng kết hợp mặt giọt nước và charm hoa lily. Thiết kế thanh lịch, tượng trưng cho sự thuần khiết, phù hợp với phong cách nữ tính, dịu dàng.<br>
                    <strong>Độ dài:</strong> 35 - 38cm <br>
                    <strong>Ghi chú cho tiệm nếu muốn thêm xích nối nha.</strong>`  
        },  
        {  
            id: 47,  
            status: 1,  
            title: 'Vòng cổ “Mer Màng”',  
            img: './assets/img/products/hm006.png',  
            category: 'Handmade',  
            price: 65000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM006<br>  
                    <strong>Mô tả:</strong> Vòng cổ chuỗi hạt cườm trắng trong suốt, điểm nhấn là charm hoa và ngôi sao. Thiết kế nhẹ nhàng, thanh thoát, phù hợp với phong cách nữ tính, thanh lịch.<br>
                    <strong>Độ dài:</strong> 35 - 38cm <br>
                    <strong>Ghi chú cho tiệm nếu muốn thêm xích nối nha.</strong>`  
        },  
        {  
            id: 48,  
            status: 1,  
            title: 'Vòng cổ hoa đá “Jasmine”',  
            img: './assets/img/products/hm007.png',  
            category: 'Handmade',  
            price: 65000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM007<br>  
                    <strong>Mô tả:</strong> Thiết kế nhẹ nhàng, nữ tính với các hạt đá tự nhiên nhiều màu pastel và charm hình hoa nhỏ. Tôn lên vẻ trong trẻo, thanh lịch, phù hợp với phong cách hàng ngày hoặc các dịp đặc biệt.<br>
                    <strong>Độ dài:</strong> 35 - 38cm`  
        },  
        {  
            id: 49,  
            status: 1,  
            title: 'Vòng cổ “Seaside Bloom”',  
            img: './assets/img/products/hm008.png',  
            category: 'Handmade',  
            price: 65000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM008<br>  
                    <strong>Mô tả:</strong> Vòng cổ phong cách biển với charm hoa ngọc trai, vỏ sò và đá tự nhiên, tông màu trắng ngà và be. Tinh tế, nhẹ nhàng, phù hợp phong cách boho-chic, du lịch biển hoặc trang phục hàng ngày.<br>
                    <strong>Độ dài:</strong> 35 - 38cm`  
        },  
        {  
            id: 50,  
            status: 1,  
            title: 'Vòng tay “Autumn Whisper”',  
            img: './assets/img/products/hm009.png',  
            category: 'Handmade',  
            price: 40000,  
            desc:  `<strong>Mã sản phẩm:</strong> HM009<br>  
                    <strong>Mô tả:</strong> Vòng tay với charm hoa và lá, tông màu trầm ấm, gợi lên vẻ đẹp nhẹ nhàng và hoài niệm của mùa thu. Thiết kế thanh thoát, tinh tế, phù hợp cho những ai yêu thích sự lãng mạn và kết nối với thiên nhiên.<br>`  
        },

        //Phụ kiện tóc
        {  
            id: 51,  
            status: 1,  
            title: 'Kẹp tóc nơ phong cách Lolita”',  
            img: './assets/img/products/pkt001.png',  
            category: 'Phụ kiện tóc',  
            price: 15000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT001<br>  
                    <strong>Mô tả:</strong> Kẹp tóc phong cách Lolita với thiết kế nơ mềm mại, và chi tiết trang trí ngọt ngào. Chất liệu vải cao cấp, phù hợp làm điểm nhấn cho trang phục nữ tính, đáng yêu. Thích hợp cho mọi dịp từ thường ngày đến dự tiệc.<br>`  
        },

        {  
            id: 52,  
            status: 1,  
            title: 'Kẹp tóc hoa hồng trắng',  
            img: './assets/img/products/pkt002.png',  
            category: 'Phụ kiện tóc',  
            price: 10000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT002<br>  
                    <strong>Mô tả:</strong> Kẹp tóc thiết kế hình hoa hồng trắng tinh tế. Chất liệu vải mềm mại, giữ được hình dáng cánh hoa tự nhiên, tạo cảm giác nhẹ nhàng và nữ tính. Phù hợp để làm điểm nhấn cho kiểu tóc tết, buộc thấp hoặc xõa nhẹ.<br>`  
        },  
        {  
            id: 53,  
            status: 1,  
            title: 'Dây buộc tóc vải hoa',  
            img: './assets/img/products/pkt003.png',  
            category: 'Phụ kiện tóc',  
            price: 15000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT003<br>  
                    <strong>Mô tả:</strong> Dây buộc tóc vải mềm, họa tiết hoa nhỏ xinh, phong cách vintage. Co giãn tốt, giữ tóc gọn mà không gây đau. Phù hợp với nhiều trang phục.<br>`  
        },  
        {  
            id: 54,  
            status: 1,  
            title: 'Dây buộc tóc ren trắng',  
            img: './assets/img/products/pkt004.png',  
            category: 'Phụ kiện tóc',  
            price: 20000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT004<br>  
                    <strong>Mô tả:</strong> Dây buộc tóc làm từ vải ren trắng mềm mại, họa tiết hoa tinh tế, mang phong cách nữ tính và sang trọng. Thiết kế chun co giãn tốt. Phù hợp để sử dụng trong các dịp đặc biệt hoặc hàng ngày.<br>`  
        },  
        {  
            id: 55,  
            status: 1,  
            title: 'Kẹp tóc hoa trà',  
            img: './assets/img/products/pkt005.png',  
            category: 'Phụ kiện tóc',  
            price: 15000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT005<br>  
                    <strong>Mô tả:</strong> Kẹp tóc thiết kế hình hoa lớn từ voan trong suốt, mang vẻ đẹp mềm mại, nhẹ nhàng và sang trọng theo phong cách cổ điển. Phụ kiện lý tưởng để làm nổi bật các kiểu tóc trong dịp tiệc, lễ cưới.<br>`  
        },  
        {  
            id: 56,  
            status: 1,  
            title: 'Băng đô cài tóc',  
            img: './assets/img/products/pkt006.png',  
            category: 'Phụ kiện tóc',  
            price: 15000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT006<br>  
                    <strong>Mô tả sản phẩm:</strong> Băng đô với thiết kế đơn giản, màu hồng pastel nhẹ nhàng, chất liệu vải, mang phong cách thanh lịch và nữ tính.<br>`  
        },  
        {  
            id: 57,  
            status: 1,  
            title: 'Băng Đô Cài Tóc Bản Rộng',  
            img: './assets/img/products/pkt007.png',  
            category: 'Phụ kiện tóc',  
            price: 25000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT007<br>  
                    <strong>Mô tả sản phẩm:</strong> Băng đô được làm từ chất liệu vải tweed cao cấp, thiết kế bản to, màu đỏ rực rỡ với họa tiết dệt nổi sang trọng. Thiết kế bản to giúp cố định tóc chắc chắn. Phù hợp để phối cùng trang phục mùa đông hoặc các dịp lễ hội.<br>`  
        },  
        {  
            id: 58,  
            status: 1,  
            title: 'Kẹp tóc nơ nhỏ',  
            img: './assets/img/products/pkt008.png',  
            category: 'Phụ kiện tóc',  
            price: 2000,  
            desc:  `<strong>Mã sản phẩm:</strong> KPT008<br>  
                    <strong>Mô tả sản phẩm:</strong> Kẹp tóc hình nơ nhỏ màu hồng nhạt. Chiếc nơ được thiết kế mềm mại với các nếp gấp chi tiết tạo sự duyên dáng.<br>`  
        },  
        {  
            id: 59,  
            status: 1,  
            title: 'Kẹp tóc hoa ly',  
            img: './assets/img/products/pkt009.png',  
            category: 'Phụ kiện tóc',  
            price: 20000,  
            desc:  `<strong>Mã sản phẩm:</strong> KPT009<br>  
                    <strong>Mô tả sản phẩm:</strong> Kẹp tóc có thiết kế độc đáo và nổi bật với hình dạng lấy cảm hứng từ thiên nhiên. Chiếc kẹp tóc có phần khung kim loại màu vàng bóng và được trang trí với một chiếc lá màu xanh lá cây sáng bóng làm điểm nhấn chính.<br>`  
        },  
        {  
            id: 60,  
            status: 1,  
            title: 'Scrunchie chấm bi xanh',  
            img: './assets/img/products/pkt010.png',  
            category: 'Phụ kiện tóc',  
            price: 15000,  
            desc:  `<strong>Mã sản phẩm:</strong> PKT010<br>  
                    <strong>Mô tả sản phẩm:</strong> Làm từ vải màu trắng với họa tiết chấm bi màu xanh dương. Chất liệu vải có vẻ mềm mại, nhẹ nhàng, mang phong cách đáng yêu và nữ tính.<br>`  
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }


// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Hoàng Gia Bảo",
            phone: "hgbaodev",
            password: "123456",
            address: 'https://github.com/hgbaodev',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Trần Nhật Sinh",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();