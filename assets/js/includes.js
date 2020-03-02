            document.write(`
                <script type='text/javascript'>
                    // load page template elements from include_*.html files
                    $(document).ready(function(){
                        $( "#header" ).load( "include_header_flipped.html" );
                        $( "#navbuttons" ).load( "include_section_navbuttons.html" );
                        $( "#footer" ).load( "include_footer.html" );
                    });
                </script>
            `);
