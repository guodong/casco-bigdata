Ext.define('bigdata.view.analysis.Dqtx', {
	extend: 'Ext.panel.Panel',
	xtype: 'analysis.dqtx',
	id: 'dxtx',
	layout:{
		type: 'border'
	},
	initComponent: function() {
		var me = this;
		var zhanstore1 = Ext.create('Ext.data.TreeStore',{
			root:{
				expanded: true,
				children:[{
					text: '华东区',
					children: [{
						text: "上海虹桥",
						children: [{id: 'shanghai:1G', text: "1G", leaf: true}, {id: 'shanghai:2G', text: "2G", leaf: true}
						, {id: 'shanghai:3G', text: "3G", leaf: true}
						, {id: 'shanghai:4G', text: "4G", leaf: true}
						, {id: 'shanghai:5G', text: "5G", leaf: true}
						, {id: 'shanghai:6G', text: "6G", leaf: true}
						, {id: 'shanghai:7G', text: "7G", leaf: true}
						, {id: 'shanghai:8G', text: "8G", leaf: true}
						, {id: 'shanghai:9G', text: "9G", leaf: true}
						, {id: 'shanghai:10G', text: "10G", leaf: true}
						]
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
						children: [{id: 'shenyang:1G', text: "1G", leaf: true}, {id: 'shenyang:2G', text: "2G", leaf: true}
						, {id: 'shenyang:3G', text: "3G", leaf: true}
						, {id: 'shenyang:4G', text: "4G", leaf: true}
						, {id: 'shenyang:5G', text: "5G", leaf: true}
						, {id: 'shenyang:6G', text: "6G", leaf: true}
						, {id: 'shenyang:7G', text: "7G", leaf: true}
						, {id: 'shenyang:8G', text: "8G", leaf: true}
						, {id: 'shenyang:9G', text: "9G", leaf: true}
						, {id: 'shenyang:10G', text: "10G", leaf: true}
						]
					}]
				}]
			}
		});
		var zhanstore2 = Ext.create('Ext.data.TreeStore',{
			root:{
				expanded: true,
				children:[{
					text: '华东区',
					children: [{
						text: "上海虹桥",
						children: [{id: 'shanghai:1G', text: "1G", leaf: true}, {id: 'shanghai:2G', text: "2G", leaf: true}
						, {id: 'shanghai:3G', text: "3G", leaf: true}
						, {id: 'shanghai:4G', text: "4G", leaf: true}
						, {id: 'shanghai:5G', text: "5G", leaf: true}
						, {id: 'shanghai:6G', text: "6G", leaf: true}
						, {id: 'shanghai:7G', text: "7G", leaf: true}
						, {id: 'shanghai:8G', text: "8G", leaf: true}
						, {id: 'shanghai:9G', text: "9G", leaf: true}
						, {id: 'shanghai:10G', text: "10G", leaf: true}
						]
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
						children: [{id: 'shenyang:1G', text: "1G", leaf: true}, {id: 'shenyang:2G', text: "2G", leaf: true}
						, {id: 'shenyang:3G', text: "3G", leaf: true}
						, {id: 'shenyang:4G', text: "4G", leaf: true}
						, {id: 'shenyang:5G', text: "5G", leaf: true}
						, {id: 'shenyang:6G', text: "6G", leaf: true}
						, {id: 'shenyang:7G', text: "7G", leaf: true}
						, {id: 'shenyang:8G', text: "8G", leaf: true}
						, {id: 'shenyang:9G', text: "9G", leaf: true}
						, {id: 'shenyang:10G', text: "10G", leaf: true}
						]
					}]
				}]
			}
		});
		var zhanstore3 = Ext.create('Ext.data.TreeStore',{
			root:{
				expanded: true,
				children:[{
					text: '华东区',
					children: [{
						text: "上海虹桥",
						children: [{id: 'shanghai:1G', text: "1G", leaf: true}, {id: 'shanghai:2G', text: "2G", leaf: true}
						, {id: 'shanghai:3G', text: "3G", leaf: true}
						, {id: 'shanghai:4G', text: "4G", leaf: true}
						, {id: 'shanghai:5G', text: "5G", leaf: true}
						, {id: 'shanghai:6G', text: "6G", leaf: true}
						, {id: 'shanghai:7G', text: "7G", leaf: true}
						, {id: 'shanghai:8G', text: "8G", leaf: true}
						, {id: 'shanghai:9G', text: "9G", leaf: true}
						, {id: 'shanghai:10G', text: "10G", leaf: true}
						]
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
						children: [{id: 'shenyang:1G', text: "1G", leaf: true}, {id: 'shenyang:2G', text: "2G", leaf: true}
						, {id: 'shenyang:3G', text: "3G", leaf: true}
						, {id: 'shenyang:4G', text: "4G", leaf: true}
						, {id: 'shenyang:5G', text: "5G", leaf: true}
						, {id: 'shenyang:6G', text: "6G", leaf: true}
						, {id: 'shenyang:7G', text: "7G", leaf: true}
						, {id: 'shenyang:8G', text: "8G", leaf: true}
						, {id: 'shenyang:9G', text: "9G", leaf: true}
						, {id: 'shenyang:10G', text: "10G", leaf: true}
						]
					}]
				}]
			}
		});
		var bllxdata = [{id: 'gddy', name: "轨道电压类"},
		    	       {id: 'dcbsdy', name: "道岔表示电压"},
						{id: 'fsdgcdy', name: "发送端功出电压"},
						{id: 'jsdxydy', name: "接收端限入电压"},
						{id: 'dwbs', name: "定位表示"},
						{id: 'fwbs', name: "反位表示"}];
		var sblxdata = [{
			name: '道岔',
			zhanchildren: zhanstore1,
			blchildren: bllxdata
		},{
			name: '轨道区段',
			zhanchildren: zhanstore2,
			blchildren: bllxdata
		},{
			name: '电源屏',
			zhanchildren: zhanstore3,
			blchildren: bllxdata
		}];
		me.selected = Ext.create('Ext.data.Store');
		me.result = Ext.create('Ext.data.Store');
		me.items = [{
			xtype: 'form',
			region: 'north',
	        split: true,
	        collapsible: true,
	        bodyPadding: '10 0',
	        title: '分析配置',
			items: [{
				xtype: 'buttongroup',  
		        columns: 2,
		        bodyBorder: false,
		        border: false,
		        items: [{
			    	xtype: 'combo',
				    fieldLabel: '设备类型',
				    id:'sblx',
				    store: Ext.create('Ext.data.Store', {
				    	data: sblxdata
				    }),
				    queryMode: 'local',
				    valueField: 'name',
				    displayField:'name',
				    listeners: {
				    	select: function(c, record){
				    		Ext.getCmp('bllx').setValue("");
				    		Ext.getCmp('bllx').getStore().setData(record.get('blchildren'));
				    		Ext.getCmp('sbtree').setStore(record.get('zhanchildren'));
				    		me.selected.removeAll();
				    	}
				    }
			    },{
			    	xtype: 'tagfield',
				    fieldLabel: '变量类型',
				    id:'bllx',
				    store: Ext.create('Ext.data.Store'),
				    queryMode: 'local',
				    valueField: 'id',
				    displayField:'name'
			    },{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 300,
			        fieldLabel: '开始时间',
			        name: 'start_at',
			        id: 'dqfx-start-at'
				},{
					xtype: 'datetimefield',
					format: 'Y-m-d H:i:s',
					width: 300,
			        fieldLabel: '结束时间',
			        name: 'end_at',
			        id: 'dqfx-end-at'
				},{
			    	xtype: 'button',
			    	text: '开始分析',
			    	handler: function(){
			    		var devids = [];
			    		me.selected.each(function(item){
			    			devids.push(item.get('id'));
			    		});
			    		var data = {
			    			method: 'dqfx',
			    			type: Ext.getCmp('bllx').getValue(),
			    			devices: devids,
			    			start_at: Ext.getCmp('dqfx-start-at').getValue(),
			    			end_at: Ext.getCmp('dqfx-end-at').getValue(),
			    		};console.log(data)
			    		var myMask = new Ext.LoadMask({
			    		    msg : 'Processing...',
			    		    target: Ext.getCmp('dxtx')
			    		});

			    		myMask.show();
						Ext.Ajax.request({
							url: 'http://hadoop:8080/cascoweb/restdqtx',
							method: 'post',
							jsonData: data,
							callback: function(a, b, response) {
								myMask.hide();
								console.log(response);
								localStorage.allreport = response.responseText;
								Ext.getCmp('dqtx-result').getStore().setData(Ext.decode(response.responseText).results);
								Ext.getCmp('dqtx-result').expand();
								
							}
						});
			    	}
			    }],
		    }]
		},{
			xtype: 'treepanel',
			title: '选择设备',
			store: Ext.create('Ext.data.TreeStore'),
			id: 'sbtree',
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
		},{
			xtype: 'grid',
			id: 'dqtx-result',
			region: 'south',
			store: me.result,
	        split: true,
	        collapsible: true,
	        collapsed: true,
	        title: '分析结果',
			columns: [{
				text: 'title',
				dataIndex: 'title'
			},{
				text: 'description',
				dataIndex: 'dsp',
				flex: 1
			},{
				text: 'device',
				dataIndex: 'device'
			},{
				text: 'station',
				dataIndex: 'station'
			},{
				text: '报警',
				dataIndex: 'is_bj',
				renderer: function(v){
					return v?'报警':'正常';
				}
			}],
			tbar: [{
				xtype: 'button',
				text: '查看全部报告',
				handler: function() {
					var graph = Ext.create('bigdata.view.result.Graph', {type: 'dqall'});
					graph.show();
				}
			}],
			listeners: {
				celldblclick: function(a,b,c,record){
					localStorage.report = JSON.stringify(record.getData());
					var graph = Ext.create('bigdata.view.result.Graph', {report: record, type: 'dq'});
					graph.show();
				}
			}
		}, {
			xtype: 'grid',
			title: '已选列表',
			region: 'center',
			store: me.selected,
			columns: [{
				text: '设备名称',
				dataIndex: 'text',
				flex: 1
			}, {
				text: '车站',
				renderer: function(a, b, record){
					return record.parentNode.getData().text;
				}
			}, {
				text: '线路',
				renderer: function(a, b, record){
					return record.parentNode.parentNode.getData().text;
				}
			}],
		}];
		this.callParent();
	}
});