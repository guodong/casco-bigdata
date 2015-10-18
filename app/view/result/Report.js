Ext.define('Myapp.view.result.Report', {
	extend: 'Ext.window.Window',
	xtype: 'result.report',
	initComponent: function(){
		var me = this;
		me.itmes = [{
			xtype: 'grid',
			store: Ext.create('Ext.data.Store', {
				data: me.result
			}),
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
			}],
		}];
		this.callParent();
	}
});