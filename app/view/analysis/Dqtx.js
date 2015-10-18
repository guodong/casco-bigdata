Ext.define('Myapp.view.main.Dqtx', {
	extend: 'Ext.panel.Panel',
	xtype: 'analysis.dqtx',
	layout:{
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		var store = Ext.create('Ext.data.TreeStore', {
			root: {
				expanded: true,
				children: [{
					text: '华东区',
					children: [{
						text: "上海虹桥",
						children: [{id: 1, text: "1dg", leaf: true}, {id: 2, text: "2dg", leaf: true}]
					}, {
						text: "苏州站",
						children: [{id: 3, text: "1dg", leaf: true}, {id: 4, text: "2dg", leaf: true}]
					}, {
						text: "无锡站",
						children: [{text: "1dg", leaf: true}, {text: "2dg", leaf: true}]
					}, {
						text: "南京站",
						children: [{text: "1dg", leaf: true}, {text: "2dg", leaf: true}]
					}]
				}, {
					text: '华北区',
					children: [{
						text: "北京站",
						children: [{text: "1dg", leaf: true}, {text: "2dg", leaf: true}]
					}, {
						text: "天津站",
						children: [{text: "1dg", leaf: true}, {text: "2dg", leaf: true}]
					}]
				}, {
					text: '东北区',
					children: [{
						text: "沈阳站",
						children: [{text: "1dg", leaf: true}, {text: "2dg", leaf: true}]
					}]
				}]
			}
		});
		me.selected = Ext.create('Ext.data.Store');
		me.items = [{
			xtype: 'treepanel',
			title: '选择设备',
			store: store,
			rootVisible: false,
			width: 200,
			region: 'west',
	        split: true,
	        collapsible: true,
			listeners: {
				itemdblclick: function(view, record, item, index, e, eOpts){
					me.selected.add(record);
				}
			},
		}, {
			xtype: 'grid',
			title: '分析配置',
			region: 'center',
			store: me.selected,
			columns: [{
				text: '已选设备',
				dataIndex: 'text',
				flex: 1
			}],
			dockedItems: [{
				xtype: 'toolbar',
			    dock: 'top',
			    items: [{
			    	xtype: 'tagfield',
				    fieldLabel: '电气特性类型',
				    id:'dqtxlx',
				    store: Ext.create('Ext.data.Store', {
				    	data: [{id: 'gddy', name: "轨道电压类"},
						{id: 'fsdgcdy', name: "发送端功出电压"},
						{id: 'jsdxydy', name: "接收端限入电压"},
						{id: 'dwbs', name: "定位表示"},
						{id: 'fwbs', name: "反位表示"}]
				    }),
				    queryMode: 'local',
				    valueField: 'id',
				    displayField:'name'
			    }]
			},{
				xtype: 'buttongroup',  
		        columns: 2,   
		        items: [{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 350,
			        fieldLabel: '开始时间',
			        name: 'start_at',
			        id: 'dqfx-start-at'
				},{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 350,
			        fieldLabel: '结束时间',
			        name: 'end_at',
			        id: 'dqfx-end-at'
				},{
			    	xtype: 'button',
			    	text: '开始分析',
			    	handler: function(){
			    		var devids = [];
			    		me.selected.each(function(item){
			    			devids.push(item.get('text'));
			    		});
			    		var data = {
			    			method: 'dqfx',
			    			type: Ext.getCmp('dqtxlx').getValue(),
			    			devices: devids,
			    			start_at: Ext.getCmp('dqfx-start-at').getValue(),
			    			end_at: Ext.getCmp('dqfx-end-at').getValue(),
			    		};console.log(data)
			    		var myMask = new Ext.LoadMask({
			    		    msg : 'Processing...',
			    		    target: Ext.getCmp('app-main')
			    		});

			    		myMask.show();
						Ext.Ajax.request({
							url: 'http://localhost:80/restservice/dqservice',
							method: 'post',
							jsonData: data,
							success: function(response, opts) {
								myMask.hide();
							},
							failure: function(response, opts) {
								myMask.hide();
						    }
						});
			    	}
			    }]
			}]
		}];
		this.callParent();
	}
});