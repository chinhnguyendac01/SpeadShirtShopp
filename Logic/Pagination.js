///Pagination
(function($){
    
     var paginate = {
         startPos: function(pageNumber, perPage) {
            // xác định vị trí mảng bắt đầu từ
             // dựa trên trang hiện tại và # trên mỗi trang
             return pageNumber * perPage;
         },
   
         getPage: function(items, startPos, perPage) {
            // khai báo một mảng trống để chứa các mục trang của chúng ta
             var page = [];
   
           // chỉ lấy các mục sau vị trí bắt đầu
             items = items.slice(startPos, items.length);
   
         // lặp các mục còn lại cho đến khi tối đa mỗi trang
             for (var i=0; i < perPage; i++) {
                 page.push(items[i]); }
   
             return page;
         },
   
         totalPages: function(items, perPage) {
           // xác định tổng số trang
             return Math.ceil(items.length / perPage);
         },
   
         createBtns: function(totalPages, currentPage) {
            // tạo các nút để thao tác trang hiện tại
             var pagination = $('<div class="pagination" />');
   
            // thêm nút "đầu tiên"
             pagination.append('<span class="pagination-button">&laquo;</span>');
   
             // thêm các trang vào giữa
             for (var i=1; i <= totalPages; i++) {
                // cắt ngắn danh sách khi quá lớn
                 if (totalPages > 5 && currentPage !== i) {
                    // nếu ở hai trang đầu tiên
                     if (currentPage === 1 || currentPage === 2) {
                        // hiển thị 5 trang đầu tiên
                         if (i > 5) continue;
                    // nếu ở hai trang cuối cùng
                     } else if (currentPage === totalPages || currentPage === totalPages - 1) {
                     // hiển thị 5 trang cuối cùng
                         if (i < totalPages - 4) continue;
                     // nếu không thì hiển thị 5 trang w / current ở giữa
                     } else {
                         if (i < currentPage - 2 || i > currentPage + 2) {
                             continue; }
                     }
                 }
   
                // nút đánh dấu cho trang
                 var pageBtn = $('<span class="pagination-button page-num" />');
   
            // thêm lớp đang hoạt động cho trang hiện tại
                 if (i == currentPage) {
                     pageBtn.addClass('active'); }
   
                // đặt văn bản thành số trang
                 pageBtn.text(i);
   
               // thêm nút vào vùng chứa
                 pagination.append(pageBtn);
             }
   
           // thêm nút "cuối cùng"
             pagination.append($('<span class="pagination-button">&raquo;</span>'));
   
             return pagination;
         },
   
         createPage: function(items, currentPage, perPage) {
           // xóa phân trang khỏi trang
             $('.pagination').remove();
   
             // set context for the items
             var container = items.parent(),
                 // detach items from the page and cast as array
                 items = items.detach().toArray(),
                 // get start position and select items for page
                 startPos = this.startPos(currentPage - 1, perPage),
                 page = this.getPage(items, startPos, perPage);
   
             // loop items and readd to page
             $.each(page, function(){
                 // prevent empty items that return as Window
                 if (this.window === undefined) {
                     container.append($(this)); }
             });
   
             // prep pagination buttons and add to page
             var totalPages = this.totalPages(items, perPage),
                 pageButtons = this.createBtns(totalPages, currentPage);
   
             container.after(pageButtons);
         }
     };
   
     // stuff it all into a jQuery method!
     $.fn.paginate = function(perPage) {
         var items = $(this);
   
         // default perPage to 5
         if (isNaN(perPage) || perPage === undefined) {
             perPage = 5; }
   
         // don't fire if fewer items than perPage
         if (items.length <= perPage) {
             return true; }
   
         // ensure items stay in the same DOM position
         if (items.length !== items.parent()[0].children.length) {
             items.wrapAll('<div class="pagination-items" />');
         }
   
         // paginate the items starting at page 1
         paginate.createPage(items, 1, perPage);
   
         // handle click events on the buttons
         $(document).on('click', '.pagination-button', function(e) {
             // get current page from active button
             var currentPage = parseInt($('.pagination-button.active').text(), 10),
                 newPage = currentPage,
                 totalPages = paginate.totalPages(items, perPage),
                 target = $(e.target);
   
             // get numbered page
             newPage = parseInt(target.text(), 10);
             if (target.text() == '«') newPage = 1;
             if (target.text() == '»') newPage = totalPages;
   
             // ensure newPage is in available range
             if (newPage > 0 && newPage <= totalPages) {
                 paginate.createPage(items, newPage, perPage); }
         });
     };
   
   })(jQuery);
   
   /* This part is just for the demo,
   not actually part of the plugin */
   
   $('.row .Jquery').paginate(8);