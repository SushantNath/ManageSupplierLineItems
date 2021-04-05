//@ui5-bundle fin/ap/lineitems/display/Component-h2-preload.js
/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.predefine('fin/ap/lineitems/display/Component',["sap/ui/core/UIComponent","sap/ui/Device","sap/fin/arp/lib/lineitems/util/ErrorHandler"],function(U,D,E){"use strict";return U.extend("fin.ap.lineitems.display1.Component",{metadata:{manifest:"json"},init:function(){U.prototype.init.apply(this,arguments);this.oErrorHandler=new E(this);this.getRouter().initialize();},createContent:function(){var r=U.prototype.createContent.apply(this,arguments);r.addStyleClass(this.getContentDensityClass());return r;},getContentDensityClass:function(){if(this._sContentDensityClass===undefined){if(jQuery(document.body).hasClass("sapUiSizeCozy")||jQuery(document.body).hasClass("sapUiSizeCompact")){this._sContentDensityClass="";}else if(!D.support.touch){this._sContentDensityClass="sapUiSizeCompact";}else{this._sContentDensityClass="sapUiSizeCozy";}}return this._sContentDensityClass;}});});
sap.ui.require.preload({
	"fin/ap/lineitems/display/manifest.json":'{"_version":"1.6.0","sap.app":{"_version":"1.2.0","id":"fin.ap.lineitems.display1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"7.0.8"},"title":"{{FULLSCREEN_TITLE}}","ach":"FI-FIO-AP","crossNavigation":{"inbounds":{"Supplier-manageLineItems":{"semanticObject":"Supplier","action":"manageLineItems","signature":{"parameters":{"sap-xapp-state":{}},"additionalParameters":"allowed"}},"Vendor-manageLineItems":{"semanticObject":"Vendor","action":"manageLineItems","signature":{"parameters":{"sap-xapp-state":{}},"additionalParameters":"allowed"}}}},"dataSources":{"ZRTF_OD_COPY_VLI_SRV":{"uri":"/sap/opu/odata/sap/ZRTF_OD_COPY_VLI_SRV","type":"OData","settings":{"odataVersion":"2.0","localUri":"./model/metadata.xml"}}},"resources":"resources.json"},"sap.ui":{"_version":"1.1.0","technology":"UI5","icons":{"icon":"sap-icon://Fiori5/F0712","favIcon":"./resources/sap/ca/ui/themes/base/img/favicon/F0712_Dsp_Vendor_Line_Items.ico"},"deviceTypes":{"desktop":true,"tablet":false,"phone":false},"supportedThemes":["sap_hcb","sap_bluecrystal"]},"sap.ui5":{"_version":"1.1.0","rootView":"fin.ap.lineitems.display1.App","resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.65.9","libs":{"sap.f":{"lazy":false},"sap.m":{"lazy":false},"sap.ui.table":{"lazy":false},"sap.ui.comp":{"lazy":false},"sap.ui.unified":{"lazy":false},"sap.ushell":{"lazy":false},"sap.fin.arp.lib.lineitems":{"lazy":false}},"components":{}},"config":{"fullWidth":true,"serviceUrl":"/sap/opu/odata/sap/ZRTF_OD_COPY_VLI_SRV","sapFiori2Adaptation":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"fin.ap.lineitems.display1.i18n.i18n"}},"i18nLib":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sap.fin.arp.lib.lineitems.messagebundle"}},"":{"dataSource":"ZRTF_OD_COPY_VLI_SRV","type":"sap.ui.model.odata.v2.ODataModel","settings":{"metadataUrlParams":{"sap-documentation":"heading,quickinfo","sap-value-list":"none"},"defaultCountMode":"Inline"},"preload":true}},"routing":{"config":{"viewType":"XML","viewPath":"fin.ap.lineitems.display1.view","controlId":"app","controlAggregation":"pages","routerClass":"sap.m.routing.Router","async":false},"routes":[{"pattern":"","name":"fullscreen","target":"fullscreen"},{"pattern":"sap-iapp-state={id}","name":"localstate-old","target":"fullscreen"},{"pattern":"{?query}","name":"localstate-new","target":"fullscreen"},{"pattern":"AppCtx={id}","name":"appctx","target":"fullscreen"}],"targets":{"fullscreen":{"viewName":"S1","controlAggregation":"pages"}}},"contentDensities":{"compact":true,"cozy":true}},"sap.platform.abap":{"_version":"1.1.0","uri":"/sap/bc/ui5_ui5/sap/fin_ven_lits"},"sap.fiori":{"_version":"1.1.0","registrationIds":["F0712"],"archeType":"transactional"},"sap.copilot":{"_version":"1.0.0","contextAnalysis":{"allowAddingObjectsFromAppScreenToCollection":true},"digitalAssistant":{"intentDefinition":{"copilotIntent":{"uri":"copilot/intent.xml","dataSources":["ZRTF_OD_COPY_VLI_SRV"],"i18n":"i18n/copilot/i18n.properties"}}}}}'
},"fin/ap/lineitems/display/Component-h2-preload"
);
sap.ui.loader.config({depCacheUI5:{
"fin/ap/lineitems/display/App.controller.js":["sap/fin/arp/lib/lineitems/controller/AbstractController.js"],
"fin/ap/lineitems/display/App.view.xml":["fin/ap/lineitems/display/App.controller.js","sap/m/App.js","sap/ui/core/mvc/XMLView.js"],
"fin/ap/lineitems/display/Component.js":["sap/fin/arp/lib/lineitems/util/ErrorHandler.js","sap/ui/Device.js","sap/ui/core/UIComponent.js"],
"fin/ap/lineitems/display/view/S1.controller.js":["sap/fin/arp/lib/lineitems/controller/AbstractController.js","sap/fin/central/lib/nav/SelectionVariant.js","sap/m/MessageBox.js","sap/ui/core/BusyIndicator.js"],
"fin/ap/lineitems/display/view/S1.view.xml":["fin/ap/lineitems/display/view/S1.controller.js","sap/f/DynamicPage.js","sap/f/DynamicPageHeader.js","sap/f/DynamicPageTitle.js","sap/m/Button.js","sap/m/FlexItemData.js","sap/m/Label.js","sap/m/MultiComboBox.js","sap/m/OverflowToolbar.js","sap/m/Select.js","sap/m/Text.js","sap/m/ToolbarSpacer.js","sap/ui/comp/navpopover/SemanticObjectController.js","sap/ui/comp/navpopover/SmartLink.js","sap/ui/comp/smartfilterbar/ControlConfiguration.js","sap/ui/comp/smartfilterbar/SmartFilterBar.js","sap/ui/comp/smarttable/SmartTable.js","sap/ui/comp/smartvariants/SmartVariantManagement.js","sap/ui/core/CustomData.js","sap/ui/core/ExtensionPoint.js","sap/ui/core/Icon.js","sap/ui/core/InvisibleText.js","sap/ui/core/Item.js","sap/ui/core/mvc/XMLView.js","sap/ui/table/AnalyticalColumn.js","sap/ui/table/AnalyticalTable.js","sap/ui/unified/Currency.js"]
}});