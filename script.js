function getWalletNumber(){
	let walletNumber = document.getElementById('wallet').textContent;
	navigator.clipboard.writeText(walletNumber);
	
	let parentBlock = document.body;
	let notification = document.createElement('div');
	notification.style.cssText = 'width: 300px; \
	                              height: 50px; \
			                      background-color: #fcff05; \
								  position: absolute; \
								  right: 30px; \
								  bottom: 30px; \
								  display: flex; \
								  justify-content: center; \
								  align-items: center; \
								  border: 1px solid #464646; \
								  font-weight: bold; \
								  font-family: Helvetica;';
	
	notification.innerHTML = 'Номер кошелька скопирован!';
	parentBlock.appendChild(notification);
	
	function removeNotification(){
		document.body.removeChild(notification);
	}
	
	setTimeout(removeNotification, 3000);
}

document.getElementById('copy').addEventListener('click', getWalletNumber);