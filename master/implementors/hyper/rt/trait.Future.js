(function() {var implementors = {};
implementors["hyper"] = [{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Connection.html\" title=\"struct hyper::client::conn::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a> + 'static,&nbsp;</span>",synthetic:false,types:["hyper::client::conn::Connection"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Handshake.html\" title=\"struct hyper::client::conn::Handshake\">Handshake</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a> + 'static,&nbsp;</span>",synthetic:false,types:["hyper::client::conn::Handshake"]},{text:"impl <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.ResponseFuture.html\" title=\"struct hyper::client::conn::ResponseFuture\">ResponseFuture</a>",synthetic:false,types:["hyper::client::conn::ResponseFuture"]},{text:"impl <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/struct.ResponseFuture.html\" title=\"struct hyper::client::ResponseFuture\">ResponseFuture</a>",synthetic:false,types:["hyper::client::ResponseFuture"]},{text:"impl&lt;I, B, S&gt; <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.Connection.html\" title=\"struct hyper::server::conn::Connection\">Connection</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/service/trait.Service.html\" title=\"trait hyper::service::Service\">Service</a>&lt;ReqBody = <a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>, ResBody = B&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/service/trait.Service.html#associatedtype.Error\" title=\"type hyper::service::Service::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/service/trait.Service.html#associatedtype.Future\" title=\"type hyper::service::Service::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a> + 'static,&nbsp;</span>",synthetic:false,types:["hyper::server::conn::Connection"]},{text:"impl&lt;I, F, S, B&gt; <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.Connecting.html\" title=\"struct hyper::server::conn::Connecting\">Connecting</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a>&lt;Item = S&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/service/trait.Service.html\" title=\"trait hyper::service::Service\">Service</a>&lt;ReqBody = <a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>, ResBody = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/service/trait.Service.html#associatedtype.Future\" title=\"type hyper::service::Service::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a>,&nbsp;</span>",synthetic:false,types:["hyper::server::conn::Connecting"]},{text:"impl&lt;I, S, B&gt; <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/struct.Server.html\" title=\"struct hyper::server::Server\">Server</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"hyper/rt/trait.Stream.html\" title=\"trait hyper::rt::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"type\" href=\"hyper/rt/trait.Stream.html#associatedtype.Error\" title=\"type hyper::rt::Stream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"type\" href=\"hyper/rt/trait.Stream.html#associatedtype.Item\" title=\"type hyper::rt::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.7/tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/service/trait.NewService.html\" title=\"trait hyper::service::NewService\">NewService</a>&lt;ReqBody = <a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>, ResBody = B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/service/trait.NewService.html#associatedtype.Error\" title=\"type hyper::service::NewService::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/service/trait.NewService.html#associatedtype.Service\" title=\"type hyper::service::NewService::Service\">Service</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"hyper/service/trait.NewService.html#associatedtype.Future\" title=\"type hyper::service::NewService::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::<a class=\"type\" href=\"hyper/service/trait.NewService.html#associatedtype.Service\" title=\"type hyper::service::NewService::Service\">Service</a> as <a class=\"trait\" href=\"hyper/service/trait.Service.html\" title=\"trait hyper::service::Service\">Service</a>&gt;::<a class=\"type\" href=\"hyper/service/trait.Service.html#associatedtype.Future\" title=\"type hyper::service::Service::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"hyper/body/trait.Payload.html\" title=\"trait hyper::body::Payload\">Payload</a>,&nbsp;</span>",synthetic:false,types:["hyper::server::Server"]},{text:"impl <a class=\"trait\" href=\"hyper/rt/trait.Future.html\" title=\"trait hyper::rt::Future\">Future</a> for <a class=\"struct\" href=\"hyper/upgrade/struct.OnUpgrade.html\" title=\"struct hyper::upgrade::OnUpgrade\">OnUpgrade</a>",synthetic:false,types:["hyper::upgrade::OnUpgrade"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
