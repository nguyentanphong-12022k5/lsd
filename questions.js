const questions = [
    {
        "question": "Câu 1: Nghiên cứu, biên soạn, học tập Lịch sử Đảng có chức năng",
        "options": [
            "A. giáo dục tinh thần yêu nước, ý thức, niềm tự hào, tự tôn, ý chí tự lực, tự cường dân tộc.",
            "B. giáo dục tư tưởng chính trị, nâng cao nhận thức tư tưởng, lý luận, con đường phát triển của cách mạng và dân tộc Việt Nam.",
            "C. giáo dục chủ nghĩa anh hùng cách mạng và giáo dục đạo đức, lối sống cao đẹp.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 2: Trong các đối tượng nghiên cứu sau đây của khoa học lịch sử, đối tượng nào không phải của khoa học Lịch sử Đảng Cộng sản Việt Nam?",
        "options": [
            "A. Sự kiện lịch sử Đảng.",
            "B. Cương lĩnh, đường lối của Đảng.",
            "C. Nghệ thuật quân sự.",
            "D. Hệ thống tổ chức của Đảng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 3: Đối tượng nghiên cứu của môn Lịch sử Đảng Cộng sản Việt Nam là",
        "options": [
            "A. các sự kiện lịch sử Đảng.",
            "B. Cương lĩnh, đường lối của Đảng.",
            "C. quá trình lãnh đạo, chỉ đạo, tổ chức thực tiễn của Đảng trong tiến trình cách mạng.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 4: Nhiệm vụ của khoa học Lịch sử Đảng Cộng sản Việt Nam là",
        "options": [
            "A. trình bày có hệ thống Cương lĩnh, đường lối của Đảng.",
            "B. tái hiện tiến trình lịch sử lãnh đạo, đấu tranh của Đảng.",
            "C. tổng kết lịch sử của Đảng và làm rõ vai trò, sức chiến đấu của hệ thống tổ chức Đảng.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 5: Phương pháp nghiên cứu cơ bản của môn học Lịch sử Đảng Cộng sản Việt Nam là gì?",
        "options": [
            "A. Lịch sử và logic.",
            "B. Tổng hợp và so sánh.",
            "C. Phỏng vấn và điền dã.",
            "D. Tổng kết thực tiễn lịch sử."
        ],
        "answer": 0
    },
    {
        "question": "Câu 6: Điểm nào dưới đây không thuộc về bối cảnh lịch sử thế giới cuối thế kỷ XIX, đầu thế kỷ XX đã tác động đến sự ra đời của Đảng Cộng sản Việt Nam?",
        "options": [
            "A. Phong trào giải phóng dân tộc phát triển mạnh mẽ, rộng khắp.",
            "B. Thắng lợi của Cách mạng Tháng Mười Nga (1917).",
            "C. Quốc tế Cộng sản (Quốc tế III) thành lập (1919).",
            "D. Cách mạng Việt Nam lâm vào tình trạng khủng hoảng sâu sắc về đường lối và giai cấp lãnh đạo."
        ],
        "answer": 3
    },
    {
        "question": "Câu 7: Trước khi thực dân Pháp xâm lược (trước năm 1858), Việt Nam là một xã hội như thế nào?",
        "options": [
            "A. Thuộc địa.",
            "B. Thuộc địa nửa phong kiến.",
            "C. Phong kiến độc lập.",
            "D. Tư bản chủ nghĩa."
        ],
        "answer": 2
    },
    {
        "question": "Câu 8: Mưu đồ kinh tế của thực dân Pháp khi xâm lược Việt Nam nói riêng và Đông Dương nói chung là gì?",
        "options": [
            "A. Biến nơi đây thành thị trường tiêu thụ hàng hoá.",
            "B. Vơ vét tài nguyên.",
            "C. Bóc lột sức lao động giá rẻ, cùng nhiều hình thức thuế khoá.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 9: Thực dân Pháp nổ súng xâm lược Việt Nam lần thứ nhất tại địa điểm nào?",
        "options": [
            "A. Hà Nội.",
            "B. Thừa Thiên - Huế.",
            "C. Đà Nẵng.",
            "D. Sài Gòn."
        ],
        "answer": 2
    },
    {
        "question": "Câu 10: Dưới chính sách thống trị của thực dân Pháp, yêu cầu cấp bách nhất của nhân dân Việt Nam là gì?",
        "options": [
            "A. Tự do, dân chủ, cơm áo và hoà bình.",
            "B. Tự do, bình đẳng, bác ái.",
            "C. Độc lập dân tộc.",
            "D. Ruộng đất."
        ],
        "answer": 2
    },
    {
        "question": "Câu 11: Trong những điểm sau đây nói về chính sách cai trị của thực dân Pháp đối với nhân dân ta, điểm nào thuộc về chính sách kinh tế?",
        "options": [
            "A. Chia Việt Nam ra thành ba kỳ: Bắc Kỳ, Trung Kỳ, Nam Kỳ.",
            "B. Chính sách khai thác thuộc địa.",
            "C. Thực hiện chính sách dung túng, duy trì các hủ tục lạc hậu trong nhân dân ta.",
            "D. Thực hiện khẩu hiệu: tự do, bình đẳng, bác ái."
        ],
        "answer": 1
    },
    {
        "question": "Câu 12: Thực dân Pháp dùng chính sách “chia để trị” nhằm mục đích gì?",
        "options": [
            "A. Chia cắt đất nước ta lâu dài.",
            "B. Tách mỗi miền thành một quốc gia riêng.",
            "C. Phá vỡ khối đoàn kết cộng đồng quốc gia dân tộc.",
            "D. Tất cả các phương án đều sai."
        ],
        "answer": 2
    },
    {
        "question": "Câu 13: “Nhà tù nhiều hơn trường học” là chính sách cai trị của thực dân Pháp đối với nhân dân ta trên lĩnh vực nào?",
        "options": [
            "A. Kinh tế.",
            "B. Chính trị.",
            "C. Văn hoá - xã hội.",
            "D. Quân sự."
        ],
        "answer": 2
    },
    {
        "question": "Câu 14: Trong xã hội thuộc địa nửa phong kiến, giai cấp nông dân Việt Nam ngoài mâu thuẫn vốn có với giai cấp địa chủ, thì họ còn có mâu thuẫn nào khác?",
        "options": [
            "A. Mâu thuẫn với thực dân Pháp xâm lược.",
            "B. Mâu thuẫn với giai cấp tư sản.",
            "C. Mâu thuẫn với giai cấp công nhân.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 0
    },
    {
        "question": "Câu 15: Mâu thuẫn chủ yếu nhất và ngày càng gay gắt trong xã hội Việt Nam dưới ách thống trị của thực dân Pháp là gì?",
        "options": [
            "A. Nông dân với địa chủ.",
            "B. Tư sản với công nhân.",
            "C. Công nhân với nông dân.",
            "D. Toàn thể dân tộc Việt Nam với thực dân Pháp và phong kiến phản động."
        ],
        "answer": 3
    },
    {
        "question": "Câu 16: Trong những điểm sau đây nói về tác động của chính sách cai trị của thực dân Pháp đối với nhân dân Việt Nam, điểm nào nói về phân hóa giai cấp ở nước ta?",
        "options": [
            "A. Tạo ra những giai cấp, tầng lớp mới (công nhân, tư sản dân tộc, tiểu tư sản).",
            "B. Trở thành xã hội thuộc địa nửa phong kiến.",
            "C. Nảy sinh mâu thuẫn cơ bản trong xã hội là: mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược.",
            "D. Chống đế quốc, giải phóng dân tộc là nhiệm vụ hàng đầu."
        ],
        "answer": 0
    },
    {
        "question": "Câu 17: Đặc điểm nổi bật của giai cấp công nhân Việt Nam là gì?",
        "options": [
            "A. Ra đời trước giai cấp tư sản dân tộc Việt Nam, vừa lớn lên đã sớm tiếp thu ánh sáng của chủ nghĩa Mác - Lênin.",
            "B. Ra đời sau giai cấp tư sản, vừa lớn lên đã sớm tiếp thu ánh sáng của chủ nghĩa Mác - Lênin.",
            "C. Ra đời trước giai cấp địa chủ phong kiến, vừa lớn lên đã sớm tiếp thu ánh sáng của chủ nghĩa Mác - Lênin.",
            "D. Ra đời trước tầng lớp tiểu tư sản, vừa lớn lên đã sớm tiếp thu ánh sáng của chủ nghĩa Mác - Lênin."
        ],
        "answer": 0
    },
    {
        "question": "Câu 18: Dưới sự thống trị của thực dân Pháp, giai cấp, tầng lớp nào ở Việt Nam được đánh giá là: có tinh thần dân tộc, yêu nước và rất nhạy cảm về chính trị và thời cuộc?",
        "options": [
            "A. Tầng lớp tiểu tư sản.",
            "B. Giai cấp tư sản.",
            "C. Giai cấp địa chủ.",
            "D. Giai cấp công nhân."
        ],
        "answer": 0
    },
    {
        "question": "Câu 19: Phong trào Cần Vương diễn ra thời gian nào?",
        "options": [
            "A. 1885-1896.",
            "B. 1884-1913.",
            "C. 1884-1896.",
            "D. 1885-1913."
        ],
        "answer": 0
    },
    {
        "question": "Câu 20: Thắng lợi của cuộc cách mạng nào đã tác động sâu sắc đến phong trào giải phóng dân tộc ở các nước thuộc địa?",
        "options": [
            "A. Cách mạng Tân Hợi (1911).",
            "B. Cách mạng Tháng Mười Nga (1917).",
            "C. Cách mạng của nhân dân Trung Hoa (1949).",
            "D. Cách mạng Cu Ba (1959)."
        ],
        "answer": 1
    },
    {
        "question": "Câu 21: Phong trào Cần Vương thuộc khuynh hướng cứu nước nào?",
        "options": [
            "A. Dân chủ tư sản.",
            "B. Phong kiến.",
            "C. Vô sản.",
            "D. Tất cả các phương án đều sai."
        ],
        "answer": 1
    },
    {
        "question": "Câu 22: Phong trào Cần Vương do ai khởi xướng và lãnh đạo?",
        "options": [
            "A. Vua Hàm Nghi và Tôn Thất Thuyết.",
            "B. Hoàng Hoa Thám.",
            "C. Phan Bội Châu.",
            "D. Phan Châu Trinh."
        ],
        "answer": 0
    },
    {
        "question": "Câu 23: Phong trào khởi nghĩa Yên Thế (Bắc Giang) do ai lãnh đạo?",
        "options": [
            "A. Hoàng Hoa Thám.",
            "B. Tôn Thất Thuyết.",
            "C. Phan Đình Phùng.",
            "D. Nguyễn Thái Học."
        ],
        "answer": 0
    },
    {
        "question": "Câu 24: Phong trào khởi nghĩa Yên Thế thuộc khuynh hướng cứu nước nào?",
        "options": [
            "A. Cải lương.",
            "B. Phong kiến.",
            "C. Dân chủ tư sản.",
            "D. Vô sản."
        ],
        "answer": 1
    },
    {
        "question": "Câu 25: Phong trào yêu nước do Phan Bội Châu khởi xướng và lãnh đạo thuộc khuynh hướng cứu nước nào?",
        "options": [
            "A. Cải lương.",
            "B. Phong kiến.",
            "C. Dân chủ tư sản.",
            "D. Vô sản."
        ],
        "answer": 2
    },
    {
        "question": "Câu 26: “Không thành công cũng thành nhân” là khẩu hiệu đấu tranh của tổ chức nào?",
        "options": [
            "A. Hội Việt Nam cách mạng thanh niên.",
            "B. Việt Nam quốc dân Đảng.",
            "C. An Nam Cộng sản Đảng.",
            "D. Đông Dương Cộng sản Đảng."
        ],
        "answer": 1
    },
    {
        "question": "Câu 27: Khẩu hiệu đấu tranh “Không thành công cũng thành nhân” của Việt Nam quốc dân Đảng, theo Lê Duẩn biểu hiện điều gì?",
        "options": [
            "A. Tính hấp tấp tiểu tư sản, tính chất hăng hái nhất thời, tính không vững chắc, non yếu của phong trào tư sản.",
            "B. Quyết tử cho Tổ quốc quyết sinh.",
            "C. Sự anh hùng, gan dạ, bất khuất trong đấu tranh giải phóng dân tộc.",
            "D. Dám hi sinh vì nền độc lập, tự do của Tổ quốc."
        ],
        "answer": 0
    },
    {
        "question": "Câu 28: Mục đích hoạt động của tổ chức Việt Nam quốc dân Đảng là gì?",
        "options": [
            "A. Đánh đổ đế quốc xâm lược, giành độc lập dân tộc và tiến lên xây dựng chủ nghĩa xã hội.",
            "B. Đánh đuổi thực dân Pháp xâm lược, giành độc lập dân tộc, xây dựng chế độ cộng hoà tư sản.",
            "C. Đánh đuổi thực dân Pháp xâm lược, khôi phục chế độ phong kiến.",
            "D. Đánh đổ chế độ thực dân và phong kiến, thành lập Nhà nước của dân, do dân và vì dân."
        ],
        "answer": 1
    },
    {
        "question": "Câu 29: Các phong trào yêu nước theo ngọn cờ phong kiến và dân chủ tư sản của nhân dân Việt Nam cuối thế kỷ XIX, đầu thế kỷ XX có mục tiêu chung là gì?",
        "options": [
            "A. Khôi phục chế độ phong kiến.",
            "B. Giành độc lập cho dân tộc.",
            "C. Lập ra một chính đảng cộng sản.",
            "D. Thành lập nhà nước của dân, do dân và vì dân."
        ],
        "answer": 1
    },
    {
        "question": "Câu 30: Thất bại của cuộc khởi nghĩa nào là dấu mốc chấm dứt vai trò lãnh đạo của giai cấp phong kiến đối với phong trào yêu nước chống thực dân Pháp ở Việt Nam?",
        "options": [
            "A. Khởi nghĩa Ba Đình của Đinh Công Tráng ở Thanh Hoá (1887).",
            "B. Khởi nghĩa Hương Khê của Phan Đình Phùng ở Hà Tĩnh (1896).",
            "C. Khởi nghĩa Bãi Sậy của Nguyễn Thiện Thuật ở Hưng Yên (1892).",
            "D. Khởi nghĩa Hồng Lĩnh của Tống Duy Tân ở Thanh Hoá (1892)."
        ],
        "answer": 1
    },
    {
        "question": "Câu 31: Các phong trào yêu nước ở Việt Nam trước khi Đảng ra đời có ý nghĩa như thế nào đối với cách mạng Việt Nam?",
        "options": [
            "A. Góp phần cổ vũ mạnh mẽ tinh thần yêu nước của nhân dân.",
            "B. Bồi đắp thêm chủ nghĩa yêu nước.",
            "C. Thúc đẩy những nhà yêu nước, nhất là thanh niên trí thức tiên tiến chọn con đường mới, giải pháp mới để giải phóng dân tộc.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 32: Năm 1911, Nguyễn Ái Quốc ra đi tìm đường cứu nước lấy tên là gì?",
        "options": [
            "A. Hồ Chí Minh.",
            "B. Nguyễn Ái Quốc.",
            "C. Nguyễn Văn Ba.",
            "D. Văn Ba."
        ],
        "answer": 3
    },
    {
        "question": "Câu 33: “Cách mạng tới nơi” là nhận xét của Nguyễn Ái Quốc về",
        "options": [
            "A. cách mạng tư sản Mỹ (1776).",
            "B. cách mạng tư sản Pháp (1789).",
            "C. cách mạng Tân Hợi (1911).",
            "D. cách mạng Tháng Mười Nga (1917)."
        ],
        "answer": 3
    },
    {
        "question": "Câu 34: Quốc tế Cộng sản (Quốc tế III) được V.I.Lênin thành lập thời gian nào?",
        "options": [
            "A. Tháng 10/1917.",
            "B. Tháng 3/1918.",
            "C. Tháng 3/1919.",
            "D. Tháng 12/1920."
        ],
        "answer": 2
    },
    {
        "question": "Câu 35: Nguyễn Ái Quốc tham gia Đảng Xã hội Pháp thời gian nào?",
        "options": [
            "A. Năm 1918.",
            "B. Năm 1919.",
            "C. Năm 1920.",
            "D. Năm 1921."
        ],
        "answer": 1
    },
    {
        "question": "Câu 36: Nguyễn Ái Quốc đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I.Lênin đăng trên báo Nhân đạo thời gian nào?",
        "options": [
            "A. Tháng 3/1919.",
            "B. Tháng 7/1920.",
            "C. Tháng 12/1920.",
            "D. Tháng 6/1925."
        ],
        "answer": 1
    },
    {
        "question": "Câu 37: “Dù màu da có khác nhau, trên đời này chỉ có hai giống người: Giống người bóc lột và giống người bị bóc lột”. Nhận xét trên của Nguyễn Ái Quốc có ý nghĩa gì đối với các dân tộc bị áp bức?",
        "options": [
            "A. Xác định rõ kẻ thù.",
            "B. Xác định rõ con đường cứu nước.",
            "C. Xác định rõ kẻ thù và lực lượng đồng minh.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 2
    },
    {
        "question": "Câu 38: Theo Nguyễn Ái Quốc, kẻ thù chung của nhân dân các nước thuộc địa, của giai cấp công nhân và nhân dân lao động trên thế giới là ai?",
        "options": [
            "A. Chủ nghĩa tư bản.",
            "B. Chủ nghĩa đế quốc.",
            "C. Chủ nghĩa thực dân.",
            "D. Chủ nghĩa phát-xít."
        ],
        "answer": 1
    },
    {
        "question": "Câu 39: Sự kiện nào được Nguyễn Ái Quốc đánh giá “là một bước ngoặt vô cùng quan trọng trong lịch sử cách mạng Việt Nam”?",
        "options": [
            "A. Thành lập Hội Việt Nam Cách mạng Thanh niên.",
            "B. Thành lập Đảng Cộng sản Việt Nam.",
            "C. Thành lập Việt Nam quốc dân Đảng.",
            "D. Thành lập Thanh niên cao vọng Đảng."
        ],
        "answer": 1
    },
    {
        "question": "Câu 40: Nguyễn Ái Quốc khẳng định: \"Muốn cứu nước, giải phóng dân tộc không có con đường nào khác ngoài con đường...\". Hãy điền từ còn thiếu vào chỗ trống?",
        "options": [
            "A. cách mạng vô sản.",
            "B. cách mạng tư sản.",
            "C. cách mạng giải phóng dân tộc.",
            "D. cách mạng dân tộc dân chủ nhân dân."
        ],
        "answer": 0
    },
    {
        "question": "Câu 41: Tác phẩm nào của Nguyễn Ái Quốc thể hiện rõ sự chuẩn bị về tư tưởng, lý luận, chính trị và tổ chức để thành lập Đảng Cộng sản Việt Nam?",
        "options": [
            "A. Yêu sách của nhân dân An Nam (1919).",
            "B. Con rồng tre (1922).",
            "C. Bản án chế độ thực dân Pháp (1925).",
            "D. Đường Cách mệnh (1927)."
        ],
        "answer": 3
    },
    {
        "question": "Câu 42: “Dù màu da có khác nhau, trên đời này chỉ có hai giống người:...”. Hãy chọn đáp án đúng để hoàn thiện nhận định trên của Nguyễn Ái Quốc?",
        "options": [
            "A. Giống người giàu có và giống người nghèo khổ.",
            "B. Giống người xâm lược và giống người bị xâm lược.",
            "C. Giống người thống trị và giống người bị trị.",
            "D. Giống người bóc lột và giống người bị bóc lột."
        ],
        "answer": 3
    },
    {
        "question": "Câu 43: Việc làm nào của Nguyễn Ái Quốc là sự chuẩn bị quan trọng về tổ chức để tiến tới thành lập chính đảng của giai cấp công nhân?",
        "options": [
            "A. Viết báo, xuất bản sách, ra các tờ báo.",
            "B. Thành lập Hội Việt Nam Cách mạng Thanh niên.",
            "C. Mở các lớp huấn luyện chính trị nhằm đào tạo cán bộ cho cách mạng Việt Nam.",
            "D. Viết tác phẩm Đường Cách mệnh."
        ],
        "answer": 1
    },
    {
        "question": "Câu 44: Trong Cương lĩnh chính trị đầu tiên, ngoài giai cấp công nhân và nông dân, Đảng chủ trương phải hết sức liên lạc với giai cấp, tầng lớp nào?",
        "options": [
            "A. Đại địa chủ, trí thức, trung nông.",
            "B. Đại địa chủ, tiểu tư sản, thanh niên.",
            "C. Đại địa chủ, trung địa chủ, trí thức.",
            "D. Tiểu tư sản, trí thức, trung nông."
        ],
        "answer": 3
    },
    {
        "question": "Câu 45: Trong tác phẩm Đường Cách mệnh, Nguyễn Ái Quốc chỉ rõ giai cấp nào là gốc của cách mệnh?",
        "options": [
            "A. Công nhân và nông dân.",
            "B. Công nhân và tư sản.",
            "C. Địa chủ và nông dân.",
            "D. Tư sản và nông dân."
        ],
        "answer": 0
    },
    {
        "question": "Câu 46: Sự kiện nào đánh dấu “giai cấp vô sản ta đã trưởng thành và đủ sức lãnh đạo cách mạng”?",
        "options": [
            "A. Thành lập Hội Việt Nam Cách mạng Thanh niên (1925).",
            "B. Thành lập Chi bộ cộng sản đầu tiên (1929).",
            "C. Các tổ chức cộng sản ra đời (1929).",
            "D. Thành lập Đảng Cộng sản Việt Nam (1930)."
        ],
        "answer": 3
    },
    {
        "question": "Câu 47: Cuốn sách chính trị đầu tiên của cách mạng Việt Nam là",
        "options": [
            "A. Bản án chế độ thực dân Pháp (1925).",
            "B. Đường Cách mệnh (1927).",
            "C. Cương lĩnh chính trị đầu tiên của Đảng (1930).",
            "D. Luận cương chính trị tháng 10/1930."
        ],
        "answer": 1
    },
    {
        "question": "Câu 48: Hội liên hiệp thuộc địa được thành lập vào năm nào?",
        "options": [
            "A. Năm 1920.",
            "B. Năm 1921.",
            "C. Năm 1923.",
            "D. Năm 1924."
        ],
        "answer": 1
    },
    {
        "question": "Câu 49: Nguyễn Ái Quốc thành lập tổ chức “Hội Việt Nam Cách mạng Thanh niên” vào năm nào, tại đâu?",
        "options": [
            "A. Năm 1925, Paris.",
            "B. Năm 1925, Quảng Châu.",
            "C. Năm 1929, Hương Cảng.",
            "D. Năm 1929, Ma Cao."
        ],
        "answer": 1
    },
    {
        "question": "Câu 50: Trong tác phẩm “Đường Kách mệnh”, Nguyễn Ái Quốc xác định lực lượng cách mạng bao gồm các giai cấp nào sau đây?",
        "options": [
            "A. Sỹ, nông, công, thương.",
            "B. Công nhân và nông dân.",
            "C. Công nhân, học trò, nhà buôn nhỏ.",
            "D. Công nhân, nông dân, học trò, điền chủ nhỏ."
        ],
        "answer": 3
    },
    {
        "question": "Câu 51: Trong các tác phẩm sau đây, tác phẩm nào vạch trần bản chất phản động của đế quốc Pháp đối với các dân tộc thuộc địa?",
        "options": [
            "A. Bản “Yêu sách 8 điểm” của Nguyễn Ái Quốc (1919).",
            "B. “Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa” của V.I.Lênin (1920).",
            "C. “Bản án chế độ thực dân Pháp” của Nguyễn Ái Quốc (1925).",
            "D. “Đường cách mệnh” của Nguyễn Ái Quốc (1927)."
        ],
        "answer": 2
    },
    {
        "question": "Câu 52: Trực tiếp phụ trách các lớp huấn luyện chính trị ở Quảng Châu (Trung Quốc) của Hội Việt Nam Cách mạng thanh niên là ai?",
        "options": [
            "A. Lâm Đức Thụ.",
            "B. Lê Hồng Sơn.",
            "C. Nguyễn Ái Quốc.",
            "D. Phùng Chí Kiên."
        ],
        "answer": 2
    },
    {
        "question": "Câu 53: Chi bộ Cộng sản đầu tiên ở Việt Nam được thành lập thời gian nào, ở đâu?",
        "options": [
            "A. Tháng 3/1929, tại Hà Nội.",
            "B. Tháng 5/1929, tại Hà Nội.",
            "C. Tháng 6/1929, tại Sài Gòn.",
            "D. Tháng 9/1929, tại Huế."
        ],
        "answer": 0
    },
    {
        "question": "Câu 54: Tiền thân của Đông Dương Cộng sản Liên đoàn là tổ chức nào?",
        "options": [
            "A. Hội Việt Nam Cách mạng thanh niên.",
            "B. Tân Việt cách mạng Đảng.",
            "C. Việt Nam Quốc dân Đảng.",
            "D. Việt Nam quang phục hội."
        ],
        "answer": 1
    },
    {
        "question": "Câu 55: Tiền thân của Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng là tổ chức nào?",
        "options": [
            "A. Tân Việt cách mạng Đảng.",
            "B. Hội Việt Nam Cách mạng thanh niên.",
            "C. Việt Nam quang phục hội.",
            "D. Việt Nam quốc dân Đảng."
        ],
        "answer": 1
    },
    {
        "question": "Câu 56: Hội nghị thành lập Đảng Cộng sản Việt Nam năm 1930 diễn ra ở đâu?",
        "options": [
            "A. Cao Bằng (Việt Nam).",
            "B. Băng Cốc (Thái Lan).",
            "C. Cửu Long (Hồng Kông).",
            "D. Matxcơva (Liên Xô)."
        ],
        "answer": 2
    },
    {
        "question": "Câu 57: Đại biểu những tổ chức cộng sản nào đã tham dự Hội nghị thành lập Đảng Cộng sản Việt Nam năm 1930?",
        "options": [
            "A. Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn.",
            "B. Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng.",
            "C. An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn.",
            "D. Đông Dương Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn."
        ],
        "answer": 1
    },
    {
        "question": "Câu 58: Hội nghị thành lập Đảng Cộng sản Việt Nam năm 1930, xác định tôn chỉ mục đích của Đảng là gì?",
        "options": [
            "A. Lãnh đạo quần chúng lao khổ làm giai cấp tranh đấu để tiêu trừ tư bản đế quốc chủ nghĩa, làm cho thực hiện xã hội cộng sản.",
            "B. Lãnh đạo quần chúng làm cách mạng ruộng đất và xây dựng xã hội tư bản chủ nghĩa.",
            "C. Lãnh đạo quần chúng lao khổ thực hiện giải phóng giai cấp, giải phóng dân tộc.",
            "D. Lãnh đạo quần chúng lao khổ đánh đổ đế quốc, đánh đổ phong kiến thực hiện người cày có ruộng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 59: Trong Cương lĩnh chính trị đầu tiên, Đảng xác định dùng phương pháp gì để giải phóng dân tộc?",
        "options": [
            "A. Đấu tranh chính trị.",
            "B. Đấu tranh quân sự.",
            "C. Bạo lực cách mạng của quần chúng.",
            "D. Đấu tranh ngoại giao."
        ],
        "answer": 2
    },
    {
        "question": "Câu 60: Hội nghị hợp nhất các tổ chức cộng sản thành một chính đảng duy nhất năm 1930 quyết định lấy tên Đảng là gì?",
        "options": [
            "A. Đảng Cộng sản Việt Nam.",
            "B. Đảng Cộng sản Đông Dương.",
            "C. Hội nghiên cứu chủ nghĩa Mác ở Đông Dương.",
            "D. Đảng Lao động Việt Nam."
        ],
        "answer": 0
    },
    {
        "question": "Câu 61: Đông Dương Cộng sản Liên đoàn được Ban Chấp hành Trung ương lâm thời chấp nhận gia nhập Đảng Cộng sản Việt Nam vào thời gian nào?",
        "options": [
            "A. Ngày 22/2/1930.",
            "B. Ngày 24/2/1930.",
            "C. Ngày 22/2/1931.",
            "D. Ngày 24/2/1931."
        ],
        "answer": 1
    },
    {
        "question": "Câu 62: Sau khi dự Hội nghị thành lập Đảng, các đại biểu trở về An Nam (Việt Nam) ngày nào?",
        "options": [
            "A. Ngày 6/1/1930.",
            "B. Ngày 3/2/1930.",
            "C. Ngày 8/2/1930.",
            "D. Ngày 24/2/1930."
        ],
        "answer": 2
    },
    {
        "question": "Câu 63: Trong Cương lĩnh chính trị đầu tiên của Đảng, nội dung nào đã làm rõ cách mạng giải phóng dân tộc ở thuộc địa nằm trong phạm trù của cách mạng vô sản?",
        "options": [
            "A. Mục tiêu chiến lược.",
            "B. Nhiệm vụ chủ yếu, trước mắt.",
            "C. Lực lượng cách mạng.",
            "D. Tinh thần đoàn kết quốc tế."
        ],
        "answer": 0
    },
    {
        "question": "Câu 64: Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp những yếu tố nào sau đây?",
        "options": [
            "A. Chủ nghĩa Mác với phong trào công nhân.",
            "B. Chủ nghĩa Mác - Lênin với phong trào công nhân.",
            "C. Chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh với phong trào công nhân.",
            "D. Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước."
        ],
        "answer": 3
    },
    {
        "question": "Câu 65: Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam xác định mục tiêu chiến lược của cách mạng Việt Nam là",
        "options": [
            "A. làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
            "B. xây dựng một nước Việt Nam dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh.",
            "C. cách mạng tư sản dân quyền - phản đế và điền địa - lập chính quyền của công nông bằng hình thức Xô-viết để dự bị điều kiện đi tới cách mạng xã hội chủ nghĩa.",
            "D. làm cách mạng tư sản dân quyền có tính chất thổ địa."
        ],
        "answer": 0
    },
    {
        "question": "Câu 66: Tại Hội nghị Ban Chấp hành Trung ương lần thứ 1 (10/1930), Đảng đã đề ra Luận Cương chính trị để thay cho văn kiện nào trước đó?",
        "options": [
            "A. Chánh cương vắn tắt của Đảng và Điều lệ vắn tắt của Đảng.",
            "B. Chánh cương vắn tắt của Đảng và Chương trình tóm tắt của Đảng.",
            "C. Chánh cương vắn tắt của Đảng và Sách lược vắn tắt của Đảng.",
            "D. Chánh cương vắn tắt của Đảng và Lời kêu gọi nhân dịp thành lập Đảng."
        ],
        "answer": 2
    },
    {
        "question": "Câu 67: Trong Luận cương chính trị tháng 10/1930, Đảng Cộng sản Đông Dương đề cao nhiệm vụ nào?",
        "options": [
            "A. Giải phóng dân tộc.",
            "B. Giải phóng giai cấp.",
            "C. Đòi quyền dân sinh, dân chủ.",
            "D. Tự do, cơm áo và hoà bình."
        ],
        "answer": 1
    },
    {
        "question": "Câu 68: Trong Luận cương chính trị tháng 10/1930, Đảng Cộng sản Đông Dương xác định tính chất của cách mạng lúc đầu là gì?",
        "options": [
            "A. Cách mạng tư sản dân quyền, có tính chất thổ địa và phản đế.",
            "B. Cách mạng giải phóng dân tộc, có tính chất thổ địa và phản đế.",
            "C. Cách mạng dân tộc dân chủ nhân dân, có tính chất thổ địa và phản đế.",
            "D. Dân tộc cách mạng và giai cấp cách mạng."
        ],
        "answer": 0
    },
    {
        "question": "Câu 69: Trước lúc hy sinh, Trần Phú đã căn dặn các đồng chí của mình điều gì?",
        "options": [
            "A. “Hãy giữ vững chí khí chiến đấu!”",
            "B. “Con đường của thanh niên chỉ có thể là con đường cách mạng”.",
            "C. “Tự do cho nhân dân tôi, hạnh phúc cho đồng bào tôi”.",
            "D. “Không có gì quý hơn độc lập, tự do”."
        ],
        "answer": 0
    },
    {
        "question": "Câu 70: Chương trình hành động của Đảng Cộng sản Đông Dương được công bố vào thời gian nào?",
        "options": [
            "A. Tháng 5/1932.",
            "B. Tháng 6/1932.",
            "C. Tháng 7/1932.",
            "D. Tháng 8/1932."
        ],
        "answer": 1
    },
    {
        "question": "Câu 71: Đại hội đại biểu toàn quốc lần thứ I (3/1935) của Đảng Cộng sản Đông Dương đã bầu ai làm Tổng Bí thư?",
        "options": [
            "A. Hà Huy Tập.",
            "B. Nguyễn Văn Cừ.",
            "C. Lê Hồng Phong.",
            "D. Trần Phú."
        ],
        "answer": 2
    },
    {
        "question": "Câu 72: Đại hội đại biểu toàn quốc lần thứ I của Đảng Cộng sản Đông Dương họp vào thời gian nào, ở đâu?",
        "options": [
            "A. Tháng 5/1930, tại Quảng Châu (Trung Quốc).",
            "B. Tháng 6/1932, tại Hương Cảng (Trung Quốc).",
            "C. Tháng 3/1935, tại Ma Cao (Trung Quốc).",
            "D. Tháng 7/1935, tại Matxcơva (Liên Xô)."
        ],
        "answer": 2
    },
    {
        "question": "Câu 73: Đại hội lần thứ VII của Quốc tế Cộng sản (7/1935), đã bầu ai trong Đảng Cộng sản Đông Dương làm Uỷ viên Ban Chấp hành Quốc tế Cộng sản?",
        "options": [
            "A. Nguyễn Ái Quốc.",
            "B. Lê Hồng Phong.",
            "C. Hoàng Văn Nọn.",
            "D. Nguyễn Thị Minh Khai."
        ],
        "answer": 1
    },
    {
        "question": "Câu 74: Đại hội lần thứ VII của Quốc tế Cộng sản (7/1935) xác định nhiệm vụ trước mắt của giai cấp công nhân và nhân dân lao động thế giới lúc này là gì?",
        "options": [
            "A. Chống chủ nghĩa phát-xít, chống chiến tranh bảo vệ dân chủ và hoà bình.",
            "B. Lật đổ chủ nghĩa tư bản để xây dựng chủ nghĩa xã hội.",
            "C. Lật đổ chủ nghĩa tư bản, giành chính quyền về tay nhân dân.",
            "D. Bảo vệ dân chủ và hoà bình thế giới."
        ],
        "answer": 0
    },
    {
        "question": "Câu 75: Nhiệm vụ trước mắt của cách mạng Đông Dương được thông qua tại Đại hội đại biểu Đảng toàn quốc lần thứ nhất (3/1935) là",
        "options": [
            "A. củng cố và phát triển Đảng.",
            "B. thu phục đông đảo quần chúng.",
            "C. mở rộng tuyên truyền chống đế quốc, chống chiến tranh, ủng hộ Liên Xô.",
            "D. Bao gồm tất cả các đáp án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 76: Tác phẩm Tự chỉ trích (1939) do ai viết?",
        "options": [
            "A. Trường Chinh.",
            "B. Nguyễn Văn Cừ.",
            "C. Lê Hồng Phong.",
            "D. Hà Huy Tập."
        ],
        "answer": 1
    },
    {
        "question": "Câu 77: Trong giai đoạn 1936-1939, Đảng xác định nhiệm vụ trước mắt của cách mạng Đông Dương là gì?",
        "options": [
            "A. Đánh đuổi đế quốc Pháp, giành độc lập hoàn toàn.",
            "B. Tịch thu ruộng đất của địa chủ phong kiến, chia cho dân cày.",
            "C. Chống phát-xít, chống chiến tranh đế quốc, chống bọn phản động thuộc địa, đòi tự do, dân chủ, cơm áo hòa bình.",
            "D. Chống đế quốc, phát-xít Pháp - Nhật, giành độc lập dân tộc."
        ],
        "answer": 2
    },
    {
        "question": "Câu 78: Trong giai đoạn 1936-1939, hình thức tổ chức và biện pháp đấu tranh được Đảng xác định là",
        "options": [
            "A. bí mật, đấu tranh vũ trang.",
            "B. công khai, đấu tranh chính trị.",
            "C. công khai và nửa công khai, hợp pháp và nửa hợp pháp.",
            "D. công khai, kết hợp đấu tranh chính trị với đấu tranh vũ trang."
        ],
        "answer": 2
    },
    {
        "question": "Câu 79: Tại Hội nghị Ban Chấp hành Trung ương lần thứ 6 (11/1939), Đảng Cộng sản Đông Dương đã quyết định thành lập Mặt trận nào?",
        "options": [
            "A. Dân chủ Đông Dương.",
            "B. Dân tộc thống nhất phản đế Đông Dương.",
            "C. Việt Nam độc lập Đồng minh (Mặt trận Việt Minh).",
            "D. Hội liên hiệp quốc dân Việt Nam (Mặt trận Liên Việt)."
        ],
        "answer": 1
    },
    {
        "question": "Câu 80: Chủ trương giải quyết vấn đề dân tộc trong khuôn khổ từng nước ở Đông Dương được Đảng đề ra tại hội nghị nào?",
        "options": [
            "A. Hội nghị Ban Chấp hành Trung ương lần thứ 6 (11/1939).",
            "B. Hội nghị Ban Chấp hành Trung ương lần thứ 7 (11/1940).",
            "C. Hội nghị Ban Chấp hành Trung ương lần thứ 8 (5/1941).",
            "D. Hội nghị toàn quốc của Đảng (8/1945)."
        ],
        "answer": 2
    },
    {
        "question": "Câu 81: Hội nghị Ban Chấp hành Trung ương lần thứ 5 (3/1938) nhấn mạnh nhiệm vụ trung tâm của Đảng trong giai đoạn hiện tại là gì?",
        "options": [
            "A. Giải phóng dân tộc.",
            "B. Lập Mặt trận dân chủ thống nhất.",
            "C. Đánh đổ bọn phong kiến phản động.",
            "D. Đấu tranh đòi quyền dân sinh, dân chủ."
        ],
        "answer": 3
    },
    {
        "question": "Câu 82: Trong các hội nghị Ban Chấp hành Trung ương Đảng sau đây, Hội nghị nào do Chủ tịch Hồ Chí Minh chủ trì xác định tính chất của cuộc cách mạng Đông Dương hiện tại là cuộc cách mạng chỉ giải quyết một vấn đề cần kíp “dân tộc giải phóng”?",
        "options": [
            "A. Hội nghị Ban Chấp hành Trung ương (2/1930).",
            "B. Hội nghị Ban Chấp hành Trung ương lần thứ 6 (11/1939).",
            "C. Hội nghị Ban Chấp hành Trung ương lần thứ 7 (11/1940).",
            "D. Hội nghị Ban Chấp hành Trung ương lần thứ 8 (5/1941)."
        ],
        "answer": 3
    },
    {
        "question": "Câu 83: Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (05/1941) tại Pắc Bó đã nêu ra nhiệm vụ trước mắt của cách mạng nước ta là",
        "options": [
            "A. đoàn kết toàn dân đánh đổ đế quốc và phong kiến.",
            "B. xây dựng phong trào, củng cố lực lượng.",
            "C. phát triển lực lượng vũ trang.",
            "D. giải phóng dân tộc."
        ],
        "answer": 3
    },
    {
        "question": "Câu 84: Đội Việt Nam Tuyên truyền giải phóng quân được thành lập ngày 22/12/1944 có nhiệm vụ",
        "options": [
            "A. vũ trang, tuyên truyền vận động nhân dân nổi dậy.",
            "B. gây dựng cơ sở chính trị và quân sự cho cuộc khởi nghĩa giành chính quyền.",
            "C. dìu dắt các đội vũ trang địa phương, giúp đỡ huấn luyện, trang bị vũ khí và cùng phối hợp hành động trong hoạt động quân sự.",
            "D. Bao gồm tất cả các đáp án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 85: Năm 1943, Đảng đưa ra Đề cương văn hóa Việt Nam xác định nhiệm vụ của các nhà văn hóa Việt Nam giai đoạn này là",
        "options": [
            "A. chống lại văn hóa nô dịch, ngu dân của bọn phát-xít và tay sai và xây dựng một nền văn hóa mới theo ba nguyên tắc: dân tộc, khoa học và đại chúng.",
            "B. đấu tranh vì một nền văn hóa mới, vì sự nghiệp chống Pháp - Nhật, giành độc lập, tự do.",
            "C. xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc.",
            "D. Bao gồm tất cả các đáp án."
        ],
        "answer": 0
    },
    {
        "question": "Câu 86: Khẩu hiệu “Đánh đuổi Nhật - Pháp” được thay bằng khẩu hiệu “Đánh đuổi phát-xít Nhật” được nêu ra trong",
        "options": [
            "A. Luận Cương chính trị tháng 10/1930.",
            "B. Chỉ thị “Nhật - Pháp bắn nhau và hành động của chúng ta” (3/1945).",
            "C. Hội nghị toàn quốc của Đảng (8/1945).",
            "D. Đại hội quốc dân tại Tân Trào (8/1945)."
        ],
        "answer": 1
    },
    {
        "question": "Câu 87: Trong Chỉ thị “Nhật - Pháp bắn nhau và hành động của chúng ta”, Đảng xác định kẻ thù cụ thể, trước mắt và duy nhất của nhân dân Đông Dương là ai?",
        "options": [
            "A. Thực dân Pháp.",
            "B. Phát-xít Nhật.",
            "C. Thực dân, phát-xít Pháp - Nhật.",
            "D. Phong kiến phản động."
        ],
        "answer": 1
    },
    {
        "question": "Câu 88: Các tổ chức quần chúng trong mặt trận Việt Minh có tên gọi là gì?",
        "options": [
            "A. Cứu quốc.",
            "B. Phản đế.",
            "C. Cứu tế đỏ.",
            "D. Công hội đỏ."
        ],
        "answer": 0
    },
    {
        "question": "Câu 89: Trong cao trào kháng Nhật, cứu nước, phong trào “Phá kho thóc, giải quyết nạn đói” đã diễn ra mạnh mẽ ở đâu?",
        "options": [
            "A. Đồng bằng Nam Bộ.",
            "B. Đồng bằng Bắc Bộ và Bắc Trung Bộ.",
            "C. Đồng bằng Bắc Bộ.",
            "D. Đồng bằng Trung Bộ."
        ],
        "answer": 1
    },
    {
        "question": "Câu 90: Đại hội quốc dân họp tại Tân Trào (8/1945), quyết định thành lập tổ chức nào?",
        "options": [
            "A. Ủy ban giải phóng dân tộc Việt Nam.",
            "B. Mặt trận Việt Minh.",
            "C. Mặt trận nhân dân Đông Dương.",
            "D. Ủy ban khởi nghĩa toàn quốc."
        ],
        "answer": 0
    },
    {
        "question": "Câu 91: Ủy ban Dân tộc Giải phóng Việt Nam thành lập tháng 8/1945, do ai làm Chủ tịch?",
        "options": [
            "A. Trường Chinh.",
            "B. Cù Huy Cận.",
            "C. Hồ Chí Minh.",
            "D. Võ Nguyên Giáp."
        ],
        "answer": 2
    },
    {
        "question": "Câu 92: Việc thành lập Chính phủ cách mạng lâm thời, quy định Quốc kỳ, Quốc ca trong Cách mạng Tháng Tám năm 1945 được quyết định bởi",
        "options": [
            "A. Tổng bộ Việt Minh.",
            "B. Đại hội quốc dân ở Tân Trào.",
            "C. Ủy ban Khởi nghĩa toàn quốc.",
            "D. Hội nghị Ban Thường vụ Trung ương Đảng."
        ],
        "answer": 1
    },
    {
        "question": "Câu 93: Uỷ ban Khởi nghĩa toàn quốc ban bố “Quân lệnh số 1”, phát lệnh Tổng khởi nghĩa trong toàn quốc vào thời gian nào?",
        "options": [
            "A. Ngày 12/8/1945.",
            "B. Ngày 13/8/1945.",
            "C. Ngày 19/8/1945.",
            "D. Ngày 23/8/1945."
        ],
        "answer": 1
    },
    {
        "question": "Câu 94: Phương pháp đấu tranh cơ bản trong Cách mạng Tháng Tám năm 1945 là gì?",
        "options": [
            "A. Kết hợp đấu tranh vũ trang và đấu tranh ngoại giao.",
            "B. Kết hợp đấu tranh chính trị và đấu tranh vũ trang.",
            "C. Kết hợp đấu tranh chính trị với đấu tranh ngoại giao.",
            "D. Đấu tranh chính trị và đấu tranh vũ trang kết hợp với ngoại giao."
        ],
        "answer": 1
    },
    {
        "question": "Câu 95: Hội nghị toàn quốc của Đảng diễn ra từ ngày 14 đến ngày 15/8/1945, do ai chủ trì?",
        "options": [
            "A. Hồ Chí Minh và Phạm Văn Đồng.",
            "B. Hồ Chí Minh và Trường Chinh.",
            "C. Hồ Chí Minh và Võ Nguyên Giáp.",
            "D. Võ Nguyên Giáp và Lê Duẩn."
        ],
        "answer": 1
    },
    {
        "question": "Câu 96: Bốn tỉnh đầu tiên giành được chính quyền ở nước ta trong cuộc Tổng khởi nghĩa Cách mạng Tháng Tám 1945 là những tỉnh nào?",
        "options": [
            "A. Bắc Ninh, Quảng Ninh, Phú Yên, Kon Tum.",
            "B. Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam.",
            "C. Thái Nguyên, Tuyên Quang, Nghệ An, Bình Định.",
            "D. Hà Giang, Nam Định, Ninh Bình, Gia Lai."
        ],
        "answer": 1
    },
    {
        "question": "Câu 97: Nhân tố chủ yếu nhất, quyết định thắng lợi của Cách mạng Tháng Tám năm 1945 là gì?",
        "options": [
            "A. Tác động của khủng hoảng kinh tế thế giới.",
            "B. Sức mạnh liên minh công - nông.",
            "C. Bối cảnh quốc tế thuận lợi.",
            "D. Sự lãnh đạo của Đảng Cộng sản Việt Nam."
        ],
        "answer": 3
    },
    {
        "question": "Câu 98: Nội dung nào sau đây không phải là ý nghĩa của Cách mạng Tháng Tám năm 1945?",
        "options": [
            "A. Phá tan xiềng xích nô lệ của chủ nghĩa đế quốc trong gần một thế kỷ, chấm dứt tồn tại của chế độ quân chủ chuyên chế ngót gần nghìn năm.",
            "B. Mở ra một kỉ nguyên mới trong lịch sử dân tộc: độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
            "C. Buộc Pháp công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.",
            "D. Nước Việt Nam từ một nước thuộc địa trở thành một quốc gia độc lập có chủ quyền."
        ],
        "answer": 2
    },
    {
        "question": "Câu 99: Thuận lợi cơ bản ở trong nước của Việt Nam sau Cách mạng Tháng Tám 1945 là gì?",
        "options": [
            "A. Việt Nam trở thành quốc gia độc lập, tự do.",
            "B. Chính quyền về tay nhân dân, nhân dân ta từ thân phận nô lệ trở thành người làm chủ nước nhà.",
            "C. Đảng trở thành Đảng cầm quyền.",
            "D. Bao gồm tất cả các phương án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 100: Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa họp phiên đầu tiên vào thời gian nào?",
        "options": [
            "A. Ngày 2/9/1945.",
            "B. Ngày 12/3/1945.",
            "C. Ngày 3/9/1945.",
            "D. Ngày 9/3/1945."
        ],
        "answer": 2
    },
    {
        "question": "Câu 101: Thực dân Pháp nổ súng xâm lược Việt Nam lần thứ hai vào thời gian nào?",
        "options": [
            "A. Ngày 2/9/1945.",
            "B. Ngày 23/9/1945.",
            "C. Ngày 23/9/1946.",
            "D. Ngày 2/9/1946."
        ],
        "answer": 1
    },
    {
        "question": "Câu 102: Để giải quyết những khó khăn sau Cách mạng Tháng Tám năm 1945, Đảng đã ban hành Chỉ thị nào?",
        "options": [
            "A. Kháng chiến kiến quốc.",
            "B. Nhật - Pháp bắn nhau và hành động của chúng ta.",
            "C. Đánh đổ thực dân Pháp và tay sai.",
            "D. Cải cách ruộng đất."
        ],
        "answer": 0
    },
    {
        "question": "Câu 103: Chỉ thị Kháng chiến kiến quốc được Ban chấp hành Trung ương Đảng ban hành vào thời gian nào?",
        "options": [
            "A. Ngày 22/11/1945.",
            "B. Ngày 22/12/1945.",
            "C. Ngày 24/12/1945.",
            "D. Ngày 25/11/1945."
        ],
        "answer": 3
    },
    {
        "question": "Câu 104: “Đồng bào Nam bộ là dân nước Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi”. Đoạn văn trên được trích trong bài viết nào của Chủ tịch Hồ Chí Minh?",
        "options": [
            "A. “Gửi đồng bào Nam bộ” (26/9/1945).",
            "B. “Lời kêu gọi đồng bào Nam bộ” (29/10/1945).",
            "C. “Thư gửi đồng bào Nam bộ” (01/6/1946).",
            "D. “Thư gửi đồng bào Nam bộ, chiến sĩ ở tiền tuyến và Uỷ ban hành chính Nam bộ (10/3/1946)."
        ],
        "answer": 2
    },
    {
        "question": "Câu 105: “...Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ...” được trích trong văn kiện nào?",
        "options": [
            "A. Lời kêu gọi toàn quốc kháng chiến (19/12/1946).",
            "B. Chỉ thị Toàn dân kháng chiến (12/12/1946).",
            "C. Chỉ thị Hòa để tiến (9/3/1946).",
            "D. Công việc khẩn cấp bây giờ (1946)."
        ],
        "answer": 0
    },
    {
        "question": "Câu 106: Phái đoàn Việt Nam Dân chủ Cộng hòa tham dự hội nghị Phôngtennơblô (Fontainebleau) do ai dẫn đầu?",
        "options": [
            "A. Hồ Chí Minh.",
            "B. Phạm Văn Đồng.",
            "C. Trường Chinh.",
            "D. Võ Nguyên Giáp."
        ],
        "answer": 1
    },
    {
        "question": "Câu 107: “Độc lập về chính trị, nhân nhượng về kinh tế” là chủ trương Đảng đề ra trong Chỉ thị Kháng chiến kiến quốc (1945) nhằm đối phó với kẻ thù nào?",
        "options": [
            "A. Pháp.",
            "B. Nhật.",
            "C. Anh.",
            "D. Tưởng Giới Thạch."
        ],
        "answer": 0
    },
    {
        "question": "Câu 108: Hiến pháp đầu tiên của Nhà nước Việt Nam Dân chủ Cộng hòa được thông qua vào thời gian nào?",
        "options": [
            "A. Tháng 11/1945.",
            "B. Tháng 11/1946.",
            "C. Tháng 11/1947.",
            "D. Tháng 11/1948."
        ],
        "answer": 1
    },
    {
        "question": "Câu 109: Tháng 2/1946, Chủ tịch Hồ Chí Minh trao tặng đồng bào, nhân dân Nam Bộ danh hiệu gì?",
        "options": [
            "A. Đất thép thành đồng.",
            "B. Thành đồng Tổ quốc.",
            "C. Quê hương Đồng Khởi.",
            "D. Anh hùng lao động."
        ],
        "answer": 1
    },
    {
        "question": "Câu 110: Khi thực dân Pháp và Tưởng Giới Thạch ký với nhau Hiệp ước Hoa - Pháp (28/2/1946) buộc Đảng ta phải đưa ra chủ trương gì?",
        "options": [
            "A. Đánh quân đội Tưởng.",
            "B. Hòa với quân đội Tưởng.",
            "C. Đánh Pháp.",
            "D. Dàn hòa với Pháp."
        ],
        "answer": 3
    },
    {
        "question": "Câu 111: Văn bản nào đã được ký kết giữa Pháp và Tưởng buộc Đảng chủ trương tạm thời “dàn hoà với Pháp”?",
        "options": [
            "A. Tạm ước (14/9/1946).",
            "B. Hiệp định sơ bộ (6/3/1946).",
            "C. Hiệp ước Trùng Khánh (28/2/1946).",
            "D. Hiệp định Giơnevơ (21/7/1954)."
        ],
        "answer": 2
    },
    {
        "question": "Câu 112: Nhiệm vụ chính của cách mạng Việt Nam được Đảng xác định tại Đại hội đại biểu toàn quốc lần thứ II (2/1951) là gì?",
        "options": [
            "A. Xóa bỏ tàn tích phong kiến.",
            "B. Làm cho dân cày có ruộng.",
            "C. Phát triển chế độ dân chủ nhân dân.",
            "D. Đấu tranh chống xâm lược, hoàn thành công cuộc giải phóng dân tộc."
        ],
        "answer": 3
    },
    {
        "question": "Câu 113: Hội nghị Ban Chấp hành Trung ương lần thứ 5 (11/1953) và Hội nghị toàn quốc của Đảng lần thứ 1 nêu chủ trương gì?",
        "options": [
            "A. Tăng cường công tác chỉ đạo chiến tranh.",
            "B. Chuẩn bị cải cách ruộng đất.",
            "C. Giảm tô, thực hiện giảm tức và tiến hành cải cách ruộng đất.",
            "D. Tất cả các phương án đều sai."
        ],
        "answer": 2
    },
    {
        "question": "Câu 114: Trong Chỉ thị Kháng chiến kiến quốc (1945), Đảng xác định kẻ thù chính của nhân dân ta lúc này là ai?",
        "options": [
            "A. Quân đội Anh.",
            "B. Quân đội Tưởng Giới Thạch.",
            "C. Thực dân Pháp xâm lược.",
            "D. Quân đội Mỹ."
        ],
        "answer": 2
    },
    {
        "question": "Câu 115: Đối tượng chính của cách mạng Việt Nam được Đảng xác định trong Chính cương của Đảng Lao Động Việt Nam (2/1951) là ai?",
        "options": [
            "A. Địa chủ phong kiến và phong kiến phản động.",
            "B. Địa chủ phong kiến, thực dân Pháp và bọn can thiệp Mỹ.",
            "C. Chủ nghĩa đế quốc xâm lược, cụ thể là đế quốc Pháp và bọn can thiệp Mỹ.",
            "D. Phong kiến phản động và đế quốc Pháp."
        ],
        "answer": 2
    },
    {
        "question": "Câu 116: Trong Chỉ thị Kháng chiến kiến quốc (25/11/1945), Đảng đã đề ra khẩu hiệu nào?",
        "options": [
            "A. Đánh đuổi đế quốc, thực dân.",
            "B. Đoàn kết nhất trí đánh đuổi kẻ thù.",
            "C. Dân tộc trên hết, Tổ quốc trên hết.",
            "D. Việt Nam độc lập."
        ],
        "answer": 2
    },
    {
        "question": "Câu 117: Trong Chính cương của Đảng Lao động Việt Nam (2/1951), Đảng xác định tính chất của xã hội Việt Nam là gì?",
        "options": [
            "A. Thuộc địa nửa phong kiến.",
            "B. Thuộc địa.",
            "C. Dân chủ nhân dân, một phần thuộc địa và nửa phong kiến.",
            "D. Tất cả các phương án đều sai."
        ],
        "answer": 2
    },
    {
        "question": "Câu 118: Tại Đại hội đại biểu toàn quốc lần thứ II (2/1951), Đảng xác định động lực của cách mạng Việt Nam gồm những giai cấp, tầng lớp nào?",
        "options": [
            "A. Công nhân, tiểu tư sản, trí thức.",
            "B. Công nhân, nông dân, lao động trí thức.",
            "C. Công nhân, nông dân, tiểu tư sản thành thị.",
            "D. Công nhân, nông dân, địa chủ yêu nước."
        ],
        "answer": 1
    },
    {
        "question": "Câu 119: Chiến thắng nào của quân và dân ta buộc thực dân Pháp phải ngồi vào bàn đàm phán tại Giơnevơ kết thúc chiến tranh ở Việt Nam?",
        "options": [
            "A. Chiến dịch Biên Giới thu đông (1950).",
            "B. Chiến dịch Việt Bắc thu đông (1947).",
            "C. Chiến dịch Trần Hưng Đạo (1952).",
            "D. Chiến dịch Điện Biên Phủ (1954)."
        ],
        "answer": 3
    },
    {
        "question": "Câu 120: Đại hội đại biểu toàn quốc lần thứ II (2/1951) đã quyết định bầu ai làm Tổng Bí thư?",
        "options": [
            "A. Nguyễn Ái Quốc.",
            "B. Trường Chinh.",
            "C. Lê Duẩn.",
            "D. Lê Hồng Phong."
        ],
        "answer": 1
    },
    {
        "question": "Câu 121: Tại Đại hội đại biểu toàn quốc lần thứ II (2/1951), Đảng đã đưa ra quyết định nào?",
        "options": [
            "A. Đảng ra hoạt động công khai và lấy tên là Đảng Cộng sản Việt Nam.",
            "B. Đảng ra hoạt động công khai lấy tên là Đảng Cộng sản Đông Dương.",
            "C. Đảng ra hoạt động công khai lấy tên là Đảng Lao Động Việt Nam.",
            "D. Đảng tuyên bố tự ý giải tán."
        ],
        "answer": 2
    },
    {
        "question": "Câu 122: “Xã hội Việt Nam hiện nay có 3 tính chất: dân chủ nhân dân, một phần thuộc địa và nửa phong kiến” là nhận định được Đảng đề ra trong văn kiện nào?",
        "options": [
            "A. Báo cáo “Hoàn thành giải phóng dân tộc, phát triển dân chủ nhân dân, tiến tới chủ nghĩa xã hội”.",
            "B. Chính Cương của Đảng Lao động Việt Nam (2/1951).",
            "C. Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (1991).",
            "D. Tổng kết Kháng chiến chống Pháp của Đảng Cộng sản Việt Nam."
        ],
        "answer": 1
    },
    {
        "question": "Câu 123: Tại Đại hội đại biểu toàn quốc lần thứ II (2/1951), Đảng đã có quyết định gì?",
        "options": [
            "A. Đặt cách mạng 3 nước trên bán đảo Đông Dương dưới sự lãnh đạo thống nhất của một Đảng.",
            "B. Do nhu cầu kháng chiến, giai cấp công nhân mỗi nước Việt Nam, Lào, Campuchia cần có một Đảng riêng.",
            "C. Thành lập Liên bang Đông Dương.",
            "D. Tất cả các phương án đều sai."
        ],
        "answer": 1
    },
    {
        "question": "Câu 124: Phái đoàn của Việt Nam tham dự Hội nghị Giơnevơ (1954) do ai làm trưởng đoàn?",
        "options": [
            "A. Phạm Văn Đồng.",
            "B. Võ Nguyên Giáp.",
            "C. Trường Chinh.",
            "D. Hồ Chí Minh."
        ],
        "answer": 0
    },
    {
        "question": "Câu 125: Nhằm đẩy mạnh thực hiện khẩu hiệu “người cày có ruộng”, tháng 11/1953, Hội nghị Ban Chấp hành Trung ương lần thứ V đã thông qua",
        "options": [
            "A. Cương lĩnh ruộng đất.",
            "B. Chỉ thị giảm tô, giảm tức.",
            "C. Chính sách cải cách ruộng đất.",
            "D. Chính sách khoán sản phẩm trong nông nghiệp."
        ],
        "answer": 0
    },
    {
        "question": "Câu 126: “... vừa tiêu hao lực lượng địch, vừa xây dựng phát triển lực lượng ta...” là nội dung của đường lối nào?",
        "options": [
            "A. Dựa vào sức mình là chính.",
            "B. Kháng chiến lâu dài.",
            "C. Kháng chiến toàn diện.",
            "D. Kháng chiến toàn dân."
        ],
        "answer": 1
    },
    {
        "question": "Câu 127: Trên cơ sở theo dõi tình hình địch ở Điện Biên Phủ, Đại tướng Võ Nguyên Giáp đã quyết định thay đổi kế hoạch để thực hiện phương châm:",
        "options": [
            "A. Đánh nhanh, thắng nhanh.",
            "B. Chắc thắng mới đánh, không chắc không đánh.",
            "C. Đánh chắc, tiến chắc.",
            "D. Cơ động, chủ động, linh hoạt."
        ],
        "answer": 2
    },
    {
        "question": "Câu 128: Thắng lợi nào sau đây được ghi vào lịch sử dân tộc ta như một Bạch Đằng, một Chi Lăng hay một Đống Đa trong thế kỷ XX và đi vào lịch sử thế giới như một chiến công hiển hách, một sự kiện đánh dấu sự sụp đổ hoàn toàn của chủ nghĩa thực dân cũ?",
        "options": [
            "A. Thắng lợi của cuộc Tổng khởi nghĩa Tháng Tám năm 1945.",
            "B. Thắng lợi của thời kỳ đấu tranh bảo vệ chính quyền cách mạng 1945-1946.",
            "C. Chiến thắng Điện Biên Phủ 1954.",
            "D. Thắng lợi của cuộc kháng chiến chống Mỹ, cứu nước."
        ],
        "answer": 2
    },
    {
        "question": "Câu 129: Đặc điểm cơ bản của cách mạng Việt Nam trong thời kỳ 1954 - 1975 là",
        "options": [
            "A. đất nước bị chia cắt làm hai miền với hai chế độ chính trị - xã hội khác nhau.",
            "B. miền Bắc tiến hành cuộc cách mạng xã hội chủ nghĩa, miền Nam tiếp tục thực hiện cuộc cách mạng dân tộc dân chủ nhân dân.",
            "C. Đảng lãnh đạo tiến hành đồng thời hai chiến lược cách mạng trên cả nước.",
            "D. Bao gồm tất cả các đáp án."
        ],
        "answer": 3
    },
    {
        "question": "Câu 130: Nghị quyết Hội nghị Trung ương Đảng lần thứ 15 (khoá II - 01/1959) xác định con đường duy nhất của cách mạng miền Nam là",
        "options": [
            "A. đẩy mạnh đấu tranh chính trị.",
            "B. đẩy mạnh đấu tranh vũ trang.",
            "C. Sử dụng bạo lực cách mạng: kết hợp đấu tranh chính trị với đấu tranh vũ trang.",
            "D. kết hợp đánh lớn, đánh vừa, đánh nhỏ."
        ],
        "answer": 2
    }
];