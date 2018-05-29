Step 1)
remix URL:
https://remix.ethereum.org

Step 2)

pragma solidity ^0.4.18;

contract Emblem {

	string pName;
	string version;

	event Penname(
		string name,
		string version
	);

	function setPenname(string _pName, string _version) public {
		pName = _pName;
		version = _version;
	}

	function getPenname() view public returns (string, string) {
		return (pName, version);
	}

}

Step 3)

http://127.0.0.1:7545

Step 4)

"Jint-Intj", "v1.00"

Step 5)

nodemon start

Step 6)

http://jint-intj:3000/
