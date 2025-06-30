'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { setAOSAnimation } from './setOsAnimation';

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  useEffect(() => {
    (async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      setAOSAnimation();
      AOS.init({ duration: 500, once: true });

      const Clarity = (await import('@microsoft/clarity')).default;
      Clarity.init('rxt1ms0m8i');

      const ReactPixel = (await import('react-facebook-pixel')).default;
      ReactPixel.init('842886247572469');
      ReactPixel.pageView();

      const handleResize = () => {
        setAOSAnimation();
        AOS.refresh();
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    })();
  }, []);

  return (
    <>
      {/* TikTok Pixel */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;
            var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
            ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
            ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
            ttq.load=function(e,n){
              var r="https://analytics.tiktok.com/i18n/pixel/events.js",
              o=n&&n.partner;
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              n=document.createElement("script");
              n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
              e=document.getElementsByTagName("script")[0];
              e.parentNode.insertBefore(n,e)
            };
            ttq.load('D17TJL3C77U8DLIL98DG');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </Script>

      {/* Tawk.to Script */}
<Script id="tawkto" strategy="afterInteractive">
  {`
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

    Tawk_API.hideWidget = false;
    Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'br',
          xOffset: 16,
          yOffset: 80
        },
        mobile: {
          position: 'br',
          xOffset: 5,
          yOffset: 80
        },
        bubble: {
          rotate: '0deg',
          xOffset: -10,
          yOffset: 60
        }
      },
      widget: {
        attentionGrabber: false
      }
    };

    (function(){
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68622581056789190faded73/1iuvm50ng';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
</Script>



      {children}
    </>
  );
};

export default ClientWrapper;
