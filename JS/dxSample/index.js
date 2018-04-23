window.dxSample = window.dxSample || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    dxSample.app = new DevExpress.framework.html.HtmlApplication({
        namespace: dxSample,
        layoutSet: DevExpress.framework.html.layoutSets['navbar'],
        navigation: dxSample.config.navigation
    });
    dxSample.app.router.register(":view/:id", { view: "home", id: undefined });


    dxSample.app.navigate();
});
