/* SysFreight Server */
var strBaseUrl = "TmsWS";
var strWebServiceURL = "www.sysfreight.net:8081";
var strWebSiteURL = "www.sysfreight.net:8081/mobileapp";
var strSecretKey = "9CBA0A78-7D1D-49D3-BA71-C72E93F9E48F";

function HashMap() {
    //���峤��
    var length = 0;
    //����һ������
    var obj = new Object();
    /**
	* �ж�Map�Ƿ�Ϊ��
	*/
    this.isEmpty = function () {
        return length == 0;
    };
    /**
	* �ж϶������Ƿ��������Key
	*/
    this.containsKey = function (key) {
        return (key in obj);
    };
    /**
	* �ж϶������Ƿ����������Value
	*/
    this.containsValue = function (value) {
        for (var key in obj) {
            if (obj[key] == value) {
                return true;
            }
        }
        return false;
    };
    /**
	*��map���������
	*/
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            length++;
        }
        obj[key] = value;
    };
    /**
	* ���ݸ�����Key���Value
	*/
    this.get = function (key) {
        return this.containsKey(key) ? obj[key] : null;
    };
    /**
	* ���ݸ�����Keyɾ��һ��ֵ
	*/
    this.remove = function (key) {
        if (this.containsKey(key) && (delete obj[key])) {
            length--;
        }
    };
    /**
	* ���Map�е�����Value
	*/
    this.values = function () {
        var _values = new Array();
        for (var key in obj) {
            _values.push(obj[key]);
        }
        return _values;
    };
    /**
	* ���Map�е�����Key
	*/
    this.keySet = function () {
        var _keys = new Array();
        for (var key in obj) {
            _keys.push(key);
        }
        return _keys;
    };
    /**
	* ���Map�ĳ���
	*/
    this.size = function () {
        return length;
    };
    /**
	* ���Map
	*/
    this.clear = function () {
        length = 0;
        obj = new Object();
    };
}