import * as React from "react"

function EthereumIcon({ selected = false }) {


  if (!selected) {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="30" height="30" rx="8" fill="#272B30"/>
    <rect x="0.5" y="0.5" width="29" height="29" rx="7.5" stroke="white" strokeOpacity="0.06"/>
    <rect x="6" y="6" width="18" height="18" fill="url(#pattern0)" fillOpacity="0.65"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_3662_41483" transform="scale(0.00333333)"/>
    </pattern>
    <image id="image0_3662_41483" width="300" height="300" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>

  }

  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g filter="url(#filter0_d_3662_40667)">
    <rect x="10.5" y="6.5" width="29" height="29" rx="7.5" fill="#272B30" stroke="#F3BA2F"/>
    </g>
    <rect x="16" y="12" width="18" height="18" fill="url(#pattern0)"/>
    <defs>
    <filter id="filter0_d_3662_40667" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="5"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.952941 0 0 0 0 0.729412 0 0 0 0 0.184314 0 0 0 0.24 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3662_40667"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3662_40667" result="shape"/>
    </filter>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_3662_40667" transform="scale(0.00333333)"/>
    </pattern>
    <image id="image0_3662_40667" width="300" height="300" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAKBmlDQ1BJQ0MgUHJvZmlsZQAASImVlgdQFNkWhm/35EQaMgMMccg5DCA5JwmSRWEYchKGKGJCFldgRRERAUXQJSq4KHEREVEMLAIKmHeQRUB5LgZEBZ3XyMbaeu/V+6tOn69v3z59+t6u6h8AkicrKSkeFgAgITGV4+1oQw8IDKLjngMsgAAJCANlFjslydrT0w0g+j3/Xe8nkLmI7mqu1frn9f8qwfCIFDYAkCfCkeEp7ASEOxHWYydxUhFeQFghIzUJ4bUugTAHaRBhxTWOWmfmGoets9vXOT7etgiHAoAns1icKACIa33R09lRSB1iIcI6ieExiQj3IGzBjmaFI7yKsEZCwjaESSoIq4T9pU7U32qG/VGTxYr6g9ff5avIlutys7Wz/D+X5H8rIT7t9+esrTw5K9p2I5JFkaBteRMt53U9PZdOC4nJ4QA3YAvs6NIApEZkpq7dYLstaTsnJio6lW6N7FYE3TmRraVB19PR0wNgbe/Xyy7e+VoZkhD8c2zvCQA2tPJ4vK4/x9z3A3AR2Qvi8J9jjFYA+NUAuFHLTuOkr4+h1w4YQAT8yDclAWSAAlABmkAPGAEzYAXsgQvwAD4gEGwFbBANEgAHZIBssBfkgQJwCBwF5aAKnAb14BxoBR2gB1wB18FtMALGwSPABTPgJVgE78EKBEE4iAJRIQlIFlKC1CE9iAlZQPaQG+QNBUKhUBSUCKVB2dA+qAAqhsqhaqgB+gHqgq5AN6FR6AE0Bc1Db6BPMAomw8KwNKwMa8NM2Bp2hX3gLXAUnAxnwbnwQbgMroHPwu3wFfg2PA5z4ZfwEgqgSChRlBxKE8VE2aI8UEGoSBQHtQuVjypF1aCaUd2oQdRdFBe1gPqIxqKpaDpaE22GdkL7otnoZPQudCG6HF2PbkcPoO+ip9CL6C8YCoaGUceYYpwxAZgoTAYmD1OKqcW0Ya5hxjEzmPdYLFYUy8AaY52wgdhY7A5sIfYEtgXbhx3FTmOXcDicBE4dZ47zwLFwqbg83HHcWdxl3BhuBvcBT8LL4vXwDvggfCI+B1+Kb8T34sfws/gVggBBiWBK8CCEE7YTighnCN2EO4QZwgpRkMggmhN9iLHEvcQyYjPxGvEx8S2JRJInmZC8SDGkPaQy0nnSDdIU6SNZiKxGtiUHk9PIB8l15D7yA/JbCoWiTLGiBFFSKQcpDZSrlKeUD3xUPi0+Z75wvt18FXztfGN8r/gJ/Er81vxb+bP4S/kv8N/hXxAgCCgL2AqwBHYJVAh0CUwKLAlSBXUFPQQTBAsFGwVvCs4J4YSUheyFwoVyhU4LXRWapqKoClRbKpu6j3qGeo06I4wVZgg7C8cKFwifEx4WXhQREjEQ8RPJFKkQuSTCFUWJKos6i8aLFom2ik6IfhKTFrMWixA7INYsNia2LC4lbiUeIZ4v3iI+Lv5Jgi5hLxEncViiQ+KJJFpSTdJLMkPypOQ1yQUpYSkzKbZUvlSr1EMaTFOjedN20E7ThmhL0jLSjtJJ0selr0ovyIjKWMnEypTI9MrMy1JlLWRjZEtkL8u+oIvQrenx9DL6AH1RjibnJJcmVy03LLciz5D3lc+Rb5F/okBUYCpEKpQo9CssKsoquitmKzYpPlQiKDGVopWOKQ0qLSszlP2V9yt3KM8xxBnOjCxGE+OxCkXFUiVZpUblnipWlakap3pCdUQNVjNUi1arULujDqsbqceon1Af1cBomGgkatRoTGqSNa010zWbNKe0RLXctHK0OrReaStqB2kf1h7U/qJjqBOvc0bnka6Qrotujm637hs9NT22XoXePX2KvoP+bv1O/dcG6gYRBicN7htSDd0N9xv2G342MjbiGDUbzRsrGocaVxpPMoWZnsxC5g0TjImNyW6THpOPpkamqaatpr+aaZrFmTWazW1gbIjYcGbDtLm8Ocu82pxrQbcItThlwbWUs2RZ1lg+s1KwCreqtZq1VrWOtT5r/cpGx4Zj02azbGtqu9O2zw5l52iXbzdsL2Tva19u/9RB3iHKoclh0dHQcYdjnxPGydXpsNOks7Qz27nBedHF2GWny4Ar2XWTa7nrMzc1N45btzvs7uJ+xP3xRqWNiRs7PICHs8cRjyeeDM9kzx+9sF6eXhVez711vbO9BzdRN4Vsatz03sfGp8jnka+Kb5pvvx+/X7Bfg9+yv51/sT83QDtgZ8DtQMnAmMDOIFyQX1Bt0NJm+81HN88EGwbnBU9sYWzJ3HJzq+TW+K2XQvhDWCEXQjGh/qGNoassD1YNaynMOawybJFtyz7GfhluFV4SPh9hHlEcMRtpHlkcORdlHnUkaj7aMro0eiHGNqY85nWsU2xV7HKcR1xdHC/eP74lAZ8QmtCVKJQYlziwTWZb5rbRJPWkvCRusmny0eRFjiunNgVK2ZLSmSqM/GSH0lTSvkmbSrdIr0j/kOGXcSFTMDMxc2i72vYD22ezHLK+34Hewd7Rny2XvTd7aqf1zupd0K6wXf27FXbn7p7Z47infi9xb9zen3J0copz3u3z39edK527J3f6G8dvmvL48jh5k/vN9ld9i/425tvhA/oHjh/4kh+ef6tAp6C0YLWQXXjrO93vyr7jHYw8OFxkVHTyEPZQ4qGJw5aH64sFi7OKp4+4H2kvoZfkl7w7GnL0ZqlBadUx4rG0Y9wyt7LO44rHDx1fLY8uH6+wqWippFUeqFw+EX5i7KTVyeYq6aqCqk+nYk7dr3asbq9Rrik9jT2dfvr5Gb8zg98zv2+olawtqP1cl1jHrfeuH2gwbmhopDUWNcFNaU3zZ4PPjpyzO9fZrNlc3SLaUnAenE87/+KH0B8mWl1b+y8wLzRfVLpY2UZty2+H2re3L3ZEd3A7AztHu1y6+rvNutt+1Pqxrkeup+KSyKWiXmJvbi/vctblpb6kvoUrUVem+0P6H10NuHpvwGtg+JrrtRvXHa5fHbQevHzD/EbPTdObXbeYtzpuG91uHzIcavvJ8Ke2YaPh9jvGdzpHTEa6RzeM9o5Zjl25a3f3+j3ne7fHN46PTvhO3J8MnuTeD78/9yD+weuH6Q9XHu15jHmc/0TgSelT2tOan1V/buEacS9N2U0NPdv07NE0e/rlLym/rM7kPqc8L52VnW2Y05vrmXeYH3mx+cXMy6SXKwt5/xL8V+UrlVcXf7X6dWgxYHHmNec1703hW4m3de8M3vUveS49fZ/wfmU5/4PEh/qPzI+Dn/w/za5krOJWyz6rfu7+4vrlMS+Bx0ticVhfrQAKCTgyEoA3dQBQAgGgjiD+YfO6N/vN00B/cTf/gdf921cZAdCMJO81d9MHwHkklK0A4EPOPZDsYwVgff0/4jelROrrrdfiawIAJ8fjvdkGAAGJVUceb8WTx/tciTR7D4DeuXVPuCYs4kFP6azRmOyFf/iyfwMRSr2UnNPv+AAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABLKADAAQAAAABAAABLAAAAAD7qKDdAAAzw0lEQVR4Ae19abDk1nUeentbr2+4eIkV03KlyjZn3hsucZWr5MQVad5C0lEpioZaXE4q+eGySA6HM0PKiWyVK1YqErcZzpByfqRKictyrJFIRbHEmffeUElEOnJKojkLGZd+mJIiyiJFzkx3o7vf0o3unAO8i77AA7qBbgCNi3uaxWlsDeB+B/je9517cKEo9CEEAkagubF4pn7+wCcC3i3tjhAgBAiBYBFoXlh8uvfynb3eX93Rq68dfDjYvdPeZEcgLTsA1P7gEECymitn72teaytbTU0pljOPEmkFhy/tSVGIsOgqCASB5vouWVU7Sq+nKO1OjyOthROBHIR2Ij0CKekRIADGRsBUVrtkxXaIxJXLppSZQkZRr2mPlFYvPsbW0TchMAoCRFijoEa/MRHQldV89r4WkFUXCMr+MUkrn1Ga6vbDhUOvPm7fhuYJAa8IkCX0ihRttwcBRlZNF7LCH6TgTyKzh/ni9GP1NbKHe4CkBZ4RIMLyDBVtyCOgYs4KlBWSFaqoQR+etIqVHJHWILBo3UAEyBIOhIdWOiHAlJWbDXT6DS6z2MMa2MNlsoduWNFyZwRIYTnjQktdEOCVlVPOyuVn+mJeaeXLaA/3U+/hIMBo3R4EiLD2QEIL3BBAsip4tIFu++BJq1gh0nLDiZY7I0CW0BkXWmpDgJGVXxto2405y9tDFexhieyhiQ1NuCNAhOWODa3ZRcAgqxwk2NtDE+x+QCPS8oMWbYsIEGHRdTAQgebGbWfmKun7vfQGDtyRy0oiLRdgaLEjApTDcoSFFiICeoIdyAptIBJLGB9LTosS8WFAnKh9ksJKVDiDawwOETNXyQFZtR0r2IM7krEnXmk1650ThaVLTwR9DNqf+AgQYYkfw8BbYJBVNjQb6HbCRFpuyNByhgARFkOCvnUEWM4qqN5Av7ASaflFTK7tKYclV7wHtlbVE+wZPWfltyh04I59rORzWvlS9vHG+uJxHz+nTROOACmshAfYa/MmZQPdzs+itKqQ01qhnJYbVjItJ4UlU7Rd2qrqCfZsqL2BLod2XWxRWhVSWq5ASbaCCEuygNubC6ULZwp6b6DzeFb27aOct5AW2sPzZA+jxD+OxyJLGMeoRHROqKwKleh7A/02j7eHKtjDEtlDvxAmZntSWIkJpb+GGMoqXjbQrQW80iqCPayT0nKDKvHLibASH+K9DWxuHDhdmMei0PjZwL1naywh0nJDRq7lRFhyxVtpXFh8fK4y9UBUFexBwkukFSSaYu6LCEvMuI101lDT9Hi+nD0ukrKyN5RIy46IXPOUdJck3jpZzYtNVnyo+EQ8PHt4HJ49fJJfT9PJRIAIK5lxtbQqaWTFGkekxZCQ55ssYcJjbZJVraNoIQ0RMykIeXsIj/E8Qb2Hk4pEdMclhRUd1pEfqbVx8LHZSuaEyDkrL6CR0vKCUjK2IYWVjDjuaUUdEuwykBU2fI/SWl88tgcQWpAIBIiwEhFGayOQrIqYYE+gDbS2tD/Hk1YR7SGRVh+cBE2RJUxQMLEpDbCBeQlsoFvYeHuoQu9hiXoP3aAScjkpLCHD5nzSqKxkJitEZY/SOkf20PlqEXMpKSwx47bnrE1lhTawS69DIqW15xJJxAJSWAkII09WXSIrPaKktBJwYTs0gRSWAygiLTLJSqAHmaPE16K0rkNOa5Uq4qPEP+hjkcIKGtEI92eSlUS9gX7htSiteeg9pJyWXwhjtT0RVqzC4f1kGmu7vYGUsxoKGpHWUIiE2YAsoTCh6p+oTlb7kl/B3m9xMFO8PWzWdo4Vlq+cDGbPtJeoECCFFRXSAR3HJCuygb4R5ZVWvjz1ZGPtwEO+d0I/mCgCpLAmCr+/g1vIinoD/YHHbU1KiwNDsEkiLEECZpIV9QYGEjEirUBgjHwnZAkjh9z/AeuYYMecFdlA/+C5/MJuD2tkD12QitdiUljxisees2lsLDyar+Qe1smKbOAefMZdQEprXASj/T0prGjx9nU0k6zQBhJZ+cLO68aktLwiFY/tiLDiEYc9Z6HbQKasEjZS6J7GTngBT1ol6D0kezjhgAw4PFnCAeBMapWprKgoNNIQWOyhqj1UOHTxVKQnQAcbigAprKEQRbuBSVZkA6MFHo7GK618MXOSlFbkIRh6QCKsoRBFt4FJVtQbGB3otiPxpEX20AZODGbJEsYgCHgKFrKiBPvEo2Kxh1WwhytkDyceFDgBIqwYRMEkKyoKjUE0+qdApNXHIi5TZAknHAmTrMgGTjgSew/P20MYeppyWnshinwJKazIIe8fsA5FoUVWukA2sA9MzKZ4pVUHe1gmezixCBFhTQj6xhpUsO+DCnaygROKgL/D8qTVpJyWP/AC3JosYYBget1VnZEV2UCvkE18O6s9TJ+snT94dOInJeEJkMKKOOiN9YOfzc9nHqFnAyMGPqDD8UqL7GFAoPrYDSksH2CNu2l9bf+jjKzo2cBx0ZzM73mlVcJEPCmtSANBCisiuBvri6CssqSsIsI77MP0lVZaqVe7lIgPG/Dd/RNhRQA02cAIQJ7AIUzSmgPSqhFpRRECsoQho2woKyNnRTYwZLAj3r1pD1tdhexhNOCTwgoRZ52sKmAD6/T6+BBhnviuSWlFFwIirJCwJhsYErAx3a1JWvm00qx3jhaWLj8V01MV+rSIsEIIH59gRxtIHzkQMElrLqM01TaRVghhJ8IKGFSerDR63CZgdOO/uz5pgdJSSWkFHTFKugeIqGED5S5dwBs2k04pabiyZBzZmU/E54vZU7XzCw8GeIlJvysirIAugcaFxc/AE/16nZWsvYFIVtNTKaULEym4c3OZlILLZPvwpFUq54i0ArwAiLACALOORaGl7CdYb2AAuxRuF0hMM9NwOaVTmqZlVrvt1L+YmU0rUznZSUtTSmVQWuuktIK4qImwxkQRclafKWIFu8SlCyZZpRSt1eoeLq/89fnCyit/Uq93758m0lK2sE6rRPZwzFtN/zkl3cdAEckqXzGUlay9gYyseuAEgaw+NL966TkeUnXt4McLpfQz25tdZaeNVpFfK8c0YpQDpYmKs17rHC2vUMnDqJEnhTUicjxZYW+gjB9GVkpaV1Z7yAoxKS5f/Bw8tkJKC8h6C0hbt4eUiB/5dpHw793IWJk/1MlqHpSVxO8NZGTlpqxMsHYnYFSD+0rl9NPSK60sKC392UNSWvZrxMs8KSwvKHHbmMoKyErm3kAjwe6urDjI9EkYVvgZUlqK0u6Q0rJfG37mSWH5QMskK0qwK16VlR1eUlpQn0Y5Lftl4XmeCMsjVFC6gL2BZAOhdAHJarOhHa7cfflZj/BZNlPBHhbIHio5tIfw7GGjtvNgcfnV0xaQaMYRASIsR1isC3llRb2B45EVQ5aUFiktdi34+SbCGoIWT1ayPhvIJ9jHUVZ2qElpWUmrUSelZb9G7POUdLcjws2jDYRhjc0KdhnZPSyyQpiLkIhvUMmD0t4teSiUpp5Sz+0/wl2CNGlDQMZ70AaB86yes6KiUP1xm3FzVs4I95eq65DTKlLJg1lcCkqrTDmt/gXCTRFhcWCwSbKBhlXB0oWwyYphTqRF9pBdC4O+yRLa0GlsHPgPZAONB5mjIisMQXEJ7KFKFfG8PayRPbTdnYpCCouDRCerytTvUQV7dMqKg1+frJ0/cD8MyXJG+op49uwh2UPLJUIKaxcOnazKRFZR2kDLlbg7U1658nS91n5A+lEe2LOHkIgnpdW/UkhhARakrKLPWfUvQecpUlr2nJZ2pLh86YwzWvIslZ6wGmuQs9pHyspUVptQwb4yWgV70LcNkRaRlv2aktoSElnZlFWMyAovVLKHkGQGSdFPxGdOy24PpVVYRFbxJiv+LyspLVJa7HqQUmERWfXJCvqJu5tN7d642EB2YfLfpLT2Ki11bfEBHiNZpqVTWDpZzUPOioaIwaKW7jbYwGJMclbDbjpSWqS0pFJYdZZgJ7LSyaoFykoUskIyQ6XVoJIHS05LNqUlhcLqnb11qlnJPpYvZ4+01I4i+6gLqKyQrCp3Xf7yMFUTx/UqFJcWqLjUeLHFDL5hWvs3+W994NHUH/5h4t8uIIfCmq5M95TeIXhZgqJpKC7k+7BRF0QnK4xckZSW2XuoAGF1U8r7lV/5UlaGq1oKwkq9/y/Vbld7z5aqfadYyUr3NuIkkRW7KXnSwlEOsI1SfaC9MAKu0rze+eb25tZS6vBrOzK0XwrCwkCWV167tt3SlqBH7GWZSCuJZMVuTCStel07ItsbpjGmBSQrVfvm3/6oe9dN7/+uyjBJ+rd07qj6tQPz0/nM+kw+c6d6vZPoF3smmaz4G7P2/OIDpfnMaRkemMaY6soKyKreyqz+7G++3OKxSPq0NAqLBbJyz5Xr201taauZbHsoC1lhXMt3XTpTv64dwQemk2wPTbJqaN9sgLKSjaww1tIRFjaakVZS7aFMZIXxxI9OWgm2h4ystoCs/vaN7l0//duXm0bL5fpXSsLCECNpXX2nvbTVSpbSspKVImzpwii3YRlGM8CcVtKUlklWYANrQFaLkpIVXhPS5bDsNwLmtGbmMhuQ17pDrYqd07KSlbh1VvYY+Z1nOa2tza5eZIkPEIv6MckKlBWSlazKisVPWoXFAECl9TYoLchrCd17yJOVqnY+LGpRKIvLON9JsYdEVnuvAoH/9uxtzDhLfnj21n033JhbnxVQafFk1WqiDXxFyAr2ceLn9NsaPCBcKmVOi6i0TLJCGwgJdtmVFYsvERZDAr6RtG4C0hLJHlrIqtX7cGX14pe4Jkk/ic/aFQQjLZOsyAbuuX6JsGyQiERaVrICG7h6hcjKFk+cZaQlQp0WI6um2n2x8SNtlZSVNaDS57CscCjKuw6/dk2EnJaVrFBZEVnZY8nmcSz0hgC9h4yssHSByIpFz/pNCsuKhzkXZ6W1l6zIBpqBGzDBlFYcc1qMrEhZDQggrCKF5YJPXJWWQVbwdwaHiKGclUv0nBej0qpXdx7EZw/jVBFPZOUcL6elpLCcUOGWxUlpmcoKRhRpNSnBzoXJ12SclBaRla/QkcIaBldclJZJVvrge0RWw+I2aH1clBaR1aAoOa8jS+iMi2UpI63NZvevJzE0jUFWIIYhWmQDLaEZeaa8+urpSdpDRlZb1BvoK4ZkCX3AVYM6remI67RMskqlKGflI1ZeN8X3/JUqU09FmYhnZEUJdq9R6m9HCquPxdCp8m7Jw2YjGqVlkBWECB6GI2U1NDwjbaArrXp0iXhGVqSsRgoX5bD8wob28OrVnUNh20NTWaENbHTvpQp2v5Hyvn15+dXTjQhIiyerGhWFeg8QtyVZQg4MP5NoD3M3Tm3M5tO3Bz3KQ5+sQFk1e4eJrPxEZvRtw7SHRFajx4X/JVlCHg0f02gP2++A0grYHhpktWsDVVJWPkIy9qZoD8NQWjxZvX51hx5kHiNSpLDGAA9/aiTip2A8rfGVFlNWqXQKXjAAZHX3pbNjnt5Efv7WV/b/YrqrtW764N/8eCInMOZB1bX9RwqlaUjEa2OPp2WSVbP7Ym0Hng1clnOk0DFDYv48FgqrsbFwUj23+DvmWQk0gUrrneomvI1nvEQ8IytFdLL62oF3z8/n/nKuknsBi24FCqV5qkU9p7U9dkW8SVZQuvD626CsBCWr+tri7zXWDj5sAjTBiYkrrPrawceKN2dP9JpdRa13f6t818UvTBCPkQ89jtIyyCqtpODPh8jKCkZvfTe8jeiF6en0LUompeCgiNswOCKS+sjATvCHhtIareTBJCtQVkhWtx5+rTHBpox8aP2pgPnsaQXe1tO4rt1fXLn4zMg7C+CHEyUsnaz2ZU60YGjibDal/99Qe1KRFlNWwttAIKtyPv3C9EzmFrUOr9eGDxbZImnh6BfYuxrA9Rr5LmrnFx4slXOn/NhDRlathvaS2u6uiKqszE6IVlcfTB2fwazXuveXJ0haE7OEJlnVOooG7L2901M6MJEvpv609vzBj0V+ZQZwQGYPtz3aQ0ZWSbCBZVRWu2SFY6jj/9h7ioMh4qCIotrD8srlpxp17/aQJ6vmO21hc1YmWeG4+J2ensvD8cRK5fTT6vmD9wVwu4y0i4koLMhZPZqv5B5uIVkZ5K2fPAZ7eiqlZEBtNUVWWuehIn5qcCLeIKtdG9iCBPuKmAl20wbOpHVlZX/hg34DJ0ZpZU9tgdrAG9jeTryAGVltJcEGOozSiu2byqUUfCtRo969r7h88XMjsc4YP4pcYZlkBX99uxxZYRvwIkClpcEFIbTSWjES8W5KyyCrlJGzEpis3noWc1ZoA53JisU0KUqrXuschTcsKTn4g4ox5D+MrHQbKHrOyoGsWCx32j0FlVahlH6mNgGlFanCsthAG1nZgz89DUoLErciK603nvulG26szMIY8f2SB0ZWaANbgpNVeR/aQHeyssc0OTktUFrcK8R4skIbeLPICXYXsrLHkimtqHNakRGWqaxsNpAHgp/GiyAJ9tBCWtc7ysxMMmzgbCF7YWo69QuYYHeyR3ws2bR+YyfQHhbnswoMa/ySKgFZ8bFkpBWlPYyEsEyyQhtok9IMAKdvC2k1ex+D3ok/c9ou7sveeO5XQWm116fnM7e361oXJPVHiqLmrP77wi/MFFPf4BPsfvDnSQveun0I3wvp5/dx2bYBvYf5cvaUMp1Wtqodoclq1NehYSyjJq3QCcskK4/Kyn5B6qSVCHsIpHVz+6ubau8/za9e/M/2doowjzmryg3+lZW9bYy0NqHk4arAJQ/18wv/dmouvVp/M/k20B5DNm8lrQ4k4i+HmogPlbDGJSseFNMeNjugtK4IqbRYe0T8roKymi2lX5iaTvuygW5t1UkLrNR2Q3tZZKXl1j4Rlo+qrOxti5K0QiMsk6x82kA7GGweQemTlrj2kLVHpG8kq3FsoFtbddKCnBYqrR2B7aFb++K8nJFVUO9qtJJWeCUPoZQ1mGS1WxQaRODMkgcsLs2nvgBdqh8NYr+0j8EI6GRVshaFDv6F97UYUyx5mIXiUigwXYearnnvv6YtR0WAkRX2dGKZgtdOk0HHw32YJQ/F9DPquYWPD9p+1HWBE1bdpSh01BPkf6eT1vZunZZOWgeItHiAAp5mNhBKTAKxgU6nx0gLnkG8k0jLCaFgl9WeX3yg5KF0YZSjmqS1BXValewztRBIK1BLiGRVxAr2gGygG2gWe1iHnNbdlNNyw2rU5YysgspZDTsPZg8hn/UdeP5wSdTew2HtnOR69fyB+wvl3JmgbKBbW3h7WK927yuvBlcRH5jCqq/tklWANtANEF1pYUU82sNSluyhG1AjLjdsYHAJdi+nYSqtOVJaXvDyuw0qqyjICs/LVFrGs4eBKq1AFFZj/eBn8/OZR+zPBvoF1e/2pLT8IjZ8e0ZWMERMaDZw0FnoSgsLMZuktAbh5GcdU1Z8db6f34+6rVVpdUBpjV/yMDZh8WSFzwZG/UFQZuCB6TQ+ME32cCz4J01W7OR10oLeQ7KHDJHRvxlZhW0D3c7QSlrj28OxCIsnK37UBbeTD2s5gsKePazXex/bd7eYFfFh4eNlv3EhK3auJmk129/ZbvUop8WA8fE9abJip2qSFjyW1lA7H4fi0j9m6/x+j5zDigtZYYP1nBb2HkJOq1RKfeHa16n30M+FEDeyYjHFkoeZQu7O6TkqefATT9y2FlGC3ct5mTkt7D0sZT83Tu/hSITVWF80c1b2IWK8NCCMbRhpdWFomhIm4s8tfCSM4yRtnzpZFWCImAnlrAbhiTFV8YFxLHmYS61Xv0B1WoPwYutQWcEoqaH3BrLjefk2SUtPxGefUdcWftfL7+zb+LaEBlllI0+w20/cbR7l5ww8e5iGoWnIHrqhZCyPo7JyOmOyh06oOC9DZRU3suLPdFx76EthGTYwvmSFwCCTb3H2kJQWf7n0p980ng28EEdl1T9LY0pXWswe5jNrP6CKeDtE+nzcyQpP0lRaaA+L2c/5VVqeCSuONtAxarugbANpoT3MFzJ/RqRlRQrJqgI2EIpC3+1nPCvrXqKd00kL7eFc5h/eDPbwB2QPLQEQgazYCY9DWp4sYR1yVjBa5COtunUMdnYCcf3m7WGzoX0U6kD+a1zPNarzQrKaL6Vh8D1xyIrHxrSHrc63f/J33eWf/5iY42nxbRp3WiSy4ts6ij0cSlh1KAotTqAolG/YONMICit5kJ20RCcrdh3opKUXlxJpiUpWfCz1QQA9ljwMJCxdWc0bOatJFIWyRo37jRc4FpemoLgUXhIgpdK6fu7gLbPTyjfgjScTqWAfN4b23+ukpQ9NA3VatfSh+Q9crNq3Sfq86GTF4oOxZKRVgzqtyoA6LdcclmkDd0cKZTsX8Rs98xY8e9jDZw8lzGmhspqbVV5IClnhNajntPShaXJ3zlR60uW08N2Ace4N9MMTfE6rDIn46oCSB0eFJboNdANLV1pY8gBvrGk25VBaSbGBg2KqvwSiKY89RLIqwAtNJ/W4jVssxl3uRWntISzoDfxMvpL9BCbYRbaBbuCZpIWvEEu4Pbz+FbCB5eTYwEExxVeIbeJjPAm3h0klKxbbYaRlsYSNC32ywmcDk/jR7SGWPIA9nMsnt+QBldXsfLJsoNv1KIs9TDpZYXyH2UNTYenKah6U1Yhvt3G7mOK63KK0WtpHysuX/zyu5+r3vFBZzQFZiVq64Le9bHuMaVLtoQxkxeKI37zSatS134XX4v1HXK4TVtJtIDbU6cNIKwX2EAooP7rvbvHrtHQbiMpK0Dorpzj5WWaSltr59lY9tZSE3kPZyIrFmyetWhV6D++6/Mcps3QBelzAJRkMxn4hwTeCgm/jATUCifj2vyocuvJ5UZutbtz+y9lM9wV4u/TPqKr3NzKL2l6389ZJC3JaLbXzf1vN9KGb3v/K37ltG/fl0AH2SLGc+SwMaKi0A3phRNzbzJ8fxjKXS+ETDkqjpv1OOtVTdhRYKB1Tcaigb8YOBk1Ld7jFNEkITBwBuD9z+r2J96isH2w7ZttTClAXfNT1A/+uUJn6g826pnTgXfJmYgtXJviD7D0DyqqXUro7re6HiquXnhO9uWQJd/NYCbKE188tHqvMZ5/QVRY8H4t/YGX4mOpqNqPUa+2j5ZXLT+m9hMWlK5+qX9v5o9lSRslCjZIMZJ5EssKLGHI239+8rrx3e7v7ehHiie2U5YNtNZPub3aXk5C/wtjNr156sl7bOQbjgik5eFpDhphiG3UrOAujlNa3H0SyQizMsgZ4/funGlU5SAvBYMpqs6EdToKywmCyj4ykpZMVjgOf0ALS8vKVkzCY4XEZSEsnKyDmGSCreq1ztLj86ml2be8Rl0m3h3ayqtx9+VkGRtK+qXA0aRFVlDrYQ1CRibWHJllBkp3ZQD6KpsJiC9EeJlVpyURWGE9UWtVGN9H2EGOq20AYbubtH/cSUcbA7kWn7xLYw2ZC7aFOVnqPICorI2dlx2CPwmIbMKXVgkS8loBEvGxkxeKI3zhSAz78nLRCUp2s0AZKODZW0pSWTlZoA+cMG8hyVvx1jNOuhIUrGWmJ3nsoM1lhHPFDw8sYOCTpX6ihPFYsiW8P+2SVUZqgrAq7CXanWO2xhPxGVnsI5fL8SkGmiayMQM2vGvZwJwG9hxhTmWyg261WWrr0pOiJeJ2sOBs4iKwQh4EKiwGlri3+UWE++/ui2UMiKxbB/rfo9lAnK0ltYD+K1ilRlZZOVrs2sKl2jhaWjNIFa+usc54IC38imj1kZAWU3N3ehNKFleT2BlpDOnwOR3LAl1CINqCfSVYwjMxPIMFO47n3Yy0aaZlkBbVlzTrYQA9kha31TFi4cQ2UVgmU1iaMldWBR1l8/Rh3ENGHkRVWsG8CWVWIrPYgL9rAfjpZ6eO4a9/+SVNb/vl76OUT9qAapJWBkoeu0o5xRbxJVpBg96qsWFt9c07c7SGRFQvt8G9daZXi+dZn/ux1stKLQkFZtUBZEVnx8FimYeSVY/kYJ+JNssoDWdW92UC+gb4JC3/MSCtuvYeMrMgG8iEePG2+qj6mL6fgyWobbGCFXus1OKCwNq6k1ScrKAqtag+VVy6eGtoY2wYjERbuI272kMjKFlkfs3F9Zb1OVmgDG9p3tlvaUoWUleeoGqQVH3vIk5WfnJW9wQPLGuwb8/Pl5Ut/0Lje+fRsKatkJvzANCMrzFm1KMHOh8nTdOWfXv7eVl2viP9eXB6Y1skKbWADbSCRladAchsVsOShqp2Iw7OHfbKColBQVl4T7FxzzMmRFRbbw6TtISMrtIGtpnYvjEr4ZXZu9O0PgbgoLZOsWqCsmkRW/qJo3bp+fvE4vKDj8UkNTdMnq9FtIN+isQkLd9YnrWh7D3myotIFPqyjT0+atHSyIhs4egAdfmmQVgZIK9rew6DJCps2siXkcSla7GE0FfE8WbWayr1UZ8VHZPTpSdpDnaz03kDKWY0ewb2/LK1ceiJqexgGWWHLAlFYDCJ1Ayriy+HXaVnJimwgwz/Ib1Ras1DyAA9MR/Jqe5OsyAYGGUbLvqKyh2GRFTYmUMLCHYZNWkRWiHI0n6jsoU5WRlEo5axCDm3YpBUmWSE0gRMW7rQJSmsOlBa+PRpfyBrUQaxkpUCC/RVKsCPgIX4M0srAa8NSoSgtnaz0ZwMpwR5iGC27hor44zDKQ+CJeJ6smtgbOEKdleVEHWaC4pI9u66tLXy6NJ/7ZFCP8VjJimzgHsBDXKCTVjH1jemZzC3w/sbAXoLAyGqzqb2809IOUZ1ViEG07TpopcWTVf36zrHy6pWTtkMGMhtI0t3pTOBNyr8Pb5HW67SycJRxhqYhsnJCOLpleiJe7f0TGJomsDotnazQBkLOisgquliyIxmJ+E4gdVoWssIK9pDICs89NMLCnecPYXFp+98bxaWjkRZPVtvQGyhqndUbz/3qDVsv3fYSDO/yLxEb0T5IWtWr2vt2tntjk5ZOVmAD4QUgL7/zdntZVGVVXTv4ya3/edv/+OHZX5sVLZ54vjpp1bYfHqe41EJWqKxCsIE8tqFZQv4gKtjDwgj2kCcrkYtCkaxurLTXp+czt7frGgx30/1IceXSWR4jUabHtYeMrKAg9GVQV8LawMb5hQfz5ewpZSqtbNV2/pf6jnbPzYdfa4gSR/48R81pWcgKxpnHN/vw+w1jOlSFxU64CPbQr9LiyWp7S2Rl9UsGWeXTt6tvtVFmpmHc6i9Wzy8eZviI9K3bw2b3vaMoLUZWmLN6+522sM8G1nbJaqvVVdR32spMMfePizfmzv3k7K0FkWLJzhVGLn0CRk7wZQ8nQVZ4vpEQFh6Ikdac/uzhYHtoISssCl0WszfwjeeQrGbXp5Gsqh0lBWhvbXeVHrzUIy8yad1z5fXq1c77tre63/f67CEjK1RWV4Gs3nX4tWt4XYj2QbIqgbJCsmJjTqnXOspMIfOevMCkBc8ePqF6tIeTIiu8ViIjLDwYT1puiXiTrNLwbKDa+XBR0NKFPWS1a77xNeNb2z3hSeunPnjl9do17b3bW9pQ0uLJCpWV2GSVs5AVXtcYUxhbXZkTnLRKy68+rpNWwf0N05MkKx1r/CfqD8tp2eu0TLLCB5lbvQ9XVi9+KepzC+J4bmTF75u1FVVXs9W9tyJqTutrB94NSdsXpmfSjiUPySIrq7Li44nTelv1Atjui+rbO3cJm9Na23+iWJ5+zP7ANLYvh2Oww7DG9YhyVnaMI1VY7OC80srAGWDJA7uBoco08WSFOBhKi7OHXxc0pwX2sNZEpbXXHiaKrCpAVpt9G8iuZf6bKa2ZfPrXRbaHptICYkKCwjjGgaz0+4YHPOppdQN6D8u5T0K9lpKDV/0o6RQMEdMBZXVFSGVVO3vrvukbpzbMnNWuDRyEq0HUKchvpWB8a1Bad4vZe/gWKK1yHoZb3i0uxTbDsCYK5qwSYQM3NaXd7nkqmtWJGpRWq6G9pLa7Kz+9fLk56BqI67r62sKJYiX3GJSf6E+rTFJZMYw83FJs03C+dXt489QnNQCl0egdFtcG7pYusAS7D2QN0krrSXmRSavK7OF0+hYlk9LJahtyVmVBE+zq2v4jhdLUU7qy8khW7C5hpAVDughuD4G09uUeQxukV7BHULrAMHT69nFbOf08mGWtC7d9ptPpfLe0cuXzwewx2r28+dzCzaX59PrsXGZR7w0cAVWmtEBlKi3BldZ8Ifu/25p27dpV7T2iJtjHISt29THSQqX1/Xfaq7cKWqelri9+CnqJusXlK59mbZvU9wi31qRONZ7HRbIqlzMXZgrpA6OSFWsZIy3h7eFX9v9iuqu1bvrg3/yYtU2kb4OspkFZebeBbu1jpIVKq7ajrYpqD93aF/VyIqwxEA+SrNhpGKQFPREQmVZD3JwWa49o30EoK3ubTdJSuy++fnXnLlGVlr1dk5gnwhoR9TDIip0KU1q6PWyKm9dj7RHlu3Zu/5HSPOSssCjUZ85qWBtN0kKl9UNQWr8tZiJ+WDvDXj+RsoawGxX2/sMkKzx3VlyqQEX8XD51tipoyUPYcQhy/6isSpVwyIrFFItLseSh/Pcy5978k4V8kOcvy75IYfmMdNhkxZ+OxR62SGnx2AQ5XUOyGrE30O95mEoL7GGtQzktv/iRwvKBGJJVaV96I4gEu5fDsuJSrNrTlda5gx/y8jvaxjsCug2MiKzwrMzi0mL61wtZUlreI2VsSQrLI2I6WVXSG7P5zMK4vYEeD2luZigtCBWWPFBOy8Rl3AmdrNAGYgV7wDmrYedmUVo/opzWMLzYelJYDIkB35MkKzytfk5LUebmUn9eJaU1IFreVuk2cEJkxWKq57RQaUFO6zVBh6bxhnZwW5HCGoIls4Gzs9ErK/upkdKyIzLaPLz494FCKXN6EsrKfsZMacETDi82SGnZ4dkzTwprDyT9BW99df9PldAGxoCs8Kz6SgtyWqS0+oHyMYU2MC5kxWKKSiu/q7So93BwMElhueDz/75628/eVO5tzMxkfkWFh7ORLOLyMZQW/K0RfGSLqPGMk7Kyt52Ulh0R5/kY3YbOJziJpW8/e8fPFCraC/B0+i/HjawYHpw9hBEuxB07jLUn7O84kxVrOyOtrYb2zdob3buouJQh0/8mS9jHQp8SgazwRDl7mDbs4QEqebDFks2KQFYspnoivpD5R5iIJ3vIItj/JoXVx0LRbWChdyHOyoo7XX2S7KEdEeu8KGTFnzUpLR4N6zQR1i4eoigra/iMOQtp6e9uFPOlHU5tG2dZDXoDSzHpDfTbDiItZ8TIEgIuSFZzMc9ZOYfPWGrYwy6OY5ueyytfvPo1soeMrOAdkJEXhQ6Kldd1GFNmD8s/l36e7OHute4VwKRupyurG7QLcewN9Iu5VWlpwr4l22+77dszsopDnZX93PzOk9KyIia1JUwSWbGwWkkLX0Arlz1MElnxMS3i23io9zDa9xKyAMTh27SBMayzGgcfuz2sPr/wz8fZn0i/ZWQlqg10w9puDy9JPDSNlAoricrKfrFblVby7WHteUiwz8fjcRt7LIKa5+1h43ub99z0r7+rBrVvUfYjHWG98ezCz910Q3ptKmHKyumCk4W0ZCArFl+TtNT2t1o/nl254bf+T52tk+FbKsK6+t/2vytfhLcU5zP/QK3Bu9YkaL1BWtDQFL7zMXlKi7eBOxEPETMpgpCZtCS4ZY3L6tpf3PH3Z+a0C7P5tDRkxW6opCotmZQViyX7ZqS1qWrf2q4rd81/4GKVrUvytxR1WPW/uOPG6ZnOt2YL8igr/qLtJ+IVqNPKfDEJiXj1/IH7MWeVtAQ7H7dB0ywRP1vJ/lo2r1z43ud/Y2bQ9klZJwVhFQvFRldJfRVfnZWRosV7L88+aWFxqdikhWRVKOfOIFnJYgPtEUWFlcvBBb3dhXrh3pdv+cFv7Ni3SeK8NJYQg9dYP/BEfn7qWKvawRfSSPkR3R4SWeEDDQZZzcymlXpdO1JevnRGlotZKsLCoBJpGRf8zDRITRhPa3tTO1xcufysCBd8DW0gKStdWSFZNYCsihKRFV6j0hmkwtKV483rO0/OVbL4TgcpP7w9nJ7NnBUhp0VkZVVWMpIV3qyS3rKktDD4zB72QGntxFhpkQ0kssLrFT/SKSyj2YpCSosNAgjdET0lrSut8wsfZPjE5RuVFSXYuZxVdedB2Wwgfy1Kq7AYCJTTYkorpfSguHQTlFYlJjktsoGkrNh9yr6lVVgMAENpdSmntd3TlRa8IehsNQZKi8iKyIrdo/y39ISFYBSWXjkOb3M+SYl4wx7OIWl9fXL2kMjKSlZ1yW0gT1jSW0IejPrG4pPFSvYhqtPatYcNsId3R1vyQGRlI6v6zoPl5VdP89epzNOksLjolw5dOtaskT3cYvawEK3SIrKykRUoKyIr7gaFSVJYVjz0uQYorTwqLXiBaheGSpfxw0oesLi0FYHSUtcP3lcopp+mx21SilEUir2BpKzs9x4pLDsiMF9ApYU5rTIVl+KLLeCh8VBzWkRWNmUFNpDIyuHGhEVEWM647JKWRon4kO2hep6UFf9sYINsoMsdaSwmSzgQHqiIJ3toqYjfDNAekrKyKqsGKashdyMprKEAkT20VsQHZQ9rpKysoy7UOkfJBg69HSnpPhwiY4vGxkFIxGeo5AFGecBnD8dRWroNLFOCHcezmpmDUReuQ85qlRLsXu5FymF5QQm2KRy6eKxxrX2KikuN4lJUWtfPLf4zj/CZm+nKisjKHCKmXgVlRWRlXh/DJiiHNQwh23ozp0WDAGJCQWs2u4fnVy89Z4PJcRbJqkRk1ScrsIHllctPOYJFCx0RIIXlCIv7QiOnRb2HWzA0r9JVMnNz6S95UVpEVrsJ9qxRZ1UnsnK/yQasIYU1AJxBq9S1hZOFfbmj9BgP/M0borSIrKy9gURWg+6sweuIsAbjM3AtkZZxI+Jwy5iIb7W6H7LbQ3Xt4McLpfQzVMFOymrgzeRxJVlCj0A5bVZcvvwQJeIVBe0hDgKYn0ufVblEvJ5gJ7JScmgDoTeQlJXTXeRvGSksf3g5bt3YWDiZr5A93FVa2tZm6p5MpndzPp/6L9tb9Cou/e02lLNyvHf8LiTC8ouYy/ZkDw17OD2VUtodkFvwhg+8uHAaX3oh20d/3EZXVhlQVm3qDQzoApDwUgoIOYfdkNIySCubgfG04D8NOhJlvMD6ZEU20OE2GWuRjNfTWIAN+zGR1jCEkr2ef5C5qXaOFpaozirIiFPSPUg0YV+FQ5cfalblrogPGFJhdmcqq9mMQmQVTtiIsELAlUgrBFBjvkuTrKA3sAk5K1JW4QSMCCscXElphYRrHHfLk1W91n2oQI/bhBYmIqzQoCV7GCK0sdm1SVZ57A3sPlReuXgqNieXwBOhpHsEQaVEfAQgT+AQJlnpRaFEVlGEgBRWBChjTqtxXXtK5qFpIoA50kOYZJXH0gUiq6jAJ8KKCOni0sWjRFoRgR3yYfpkBTawSmQVMtyW3ZMltMAR/gzZw/AxDvMIVrLSKGcVJtgO+yaF5QBKmIv0kgeyh2FCHNq++2QFNrBKZBUa0AN2TAprADhhrmqsHzyVn888KPN4WmHiG/S++2QFRaFAVgXqDQwaYk/7I4XlCabgNypATqtJSit4YEPYI09WqKyIrEIA2eMuSWF5BCqszUhphYVsMPvlyYqUVTCYjrMXIqxx0Avot0RaAQEZ8G6IrAIGNIDdEWEFAGIQuyDSCgLF4PZBZBUclkHuiQgrSDTH3BeR1pgABvRzC1mpkLM6RI/bBATt2LshwhobwmB3QKQVLJ5+90Zk5RexaLenXsJo8R56NL33sEaP8QwFKoQNLGSFvYGkrEJAebxdEmGNh18ovy68Dx/j6ZymZw9DgddxpzxZ1Ws7x6h0wRGmiS8kSzjxELifQOMCFJeWqbjUHaFg1tjJqrx85WQwe6a9BI0AKaygEQ1wf6S0AgTTZVdEVi7AxHQxKayYBoY/LXV98anCfPYIPcbDozL+NJHV+BhGvQcirKgRH/F4RFojAufyM56smpizIhvoglS8FpMljFc8XM+muHTpQUrEu8LjawVPVnqCncjKF36T3JgU1iTRH+HYDbCHebKHIyBn/IQnK1JWI8M4sR8SYU0M+tEPTPZwNOz6ZKW/iots4GgwTvRXRFgThX/0g5PS8oddn6xgPCvKWfkDL0ZbE2HFKBh+T4VIyxtiRFbecBJhK0q6ixAll3MsQCK+SRXxLugYi/tklVbU653j1Bs4EK7YryTCin2IBp8gkZY7Pn2yygBZacdLq5eedN+a1oiAAFlCEaLk4RzVjQOnC5WpB6i41ADLSlYdIisP15AIm5DCEiFKHs6xeOjKkWaNHphGqIisPFwwgm5CCkvQwLmdtuxKi8jK7cpIxnIirGTE0dKKJtjDOQntoYWs6mADlyhnZbkwEjBDljABQbQ3IQ/2sFHdOSPTeFoWsoLeQCIr+1WRjHlSWMmIo2MrDHs4DYn4ttLtOW6SiIV9ssLSBeoNTERQXRpBhOUCTFIWJ90e9skKSheqnROllUtPJCV21I69CBBh7cUkcUuSmoi3kBXlrBJ33To1iAjLCZUELjOUVnLsYZ+s4EHmunYcCmipKDSB1629SZR0tyOS0HlMxLeq24lIxPfJCm2gdoLIKqEXrUOzSGE5gJLkRSyn1ax29AJL0drKk1UTbCCRlWgRHO98SWGNh59wvzaU1s6ZfCWnpAX7c9UnK+gNhAQ7kZVwl9/YJ0yENTaE4u1Ar9O63n5apDqtPlkZNpB6A8W77oI4YyKsIFAUcB8wRvwDMEa8TlqpmCstK1lR6YKAl1tgpxzzSzWwdtKOXBCA4ZbPFOZz98e1uLRPVmgDNaqzcomjLIuJsGSJ9IB2qhtAWpUskFYnVhXxfbICG1gHZbVERaEDwijFKrKEUoR5cCOLh8AeVuNlDy1khRXsRFaDgyjJWlJYkgTaSzPjYg95soLyixMFetzGS/ik2IYIS4owe29kc+M2KC5NT8weWsgKbCCULtCzgd7Dl/gtibASH2L/DWxCTgtKHu6PuriUyMp/rGT7BRGWbBH32F6DtKLrPSSy8hgYyTejpLvkF4Bb8/OQiG9VtUiKS3myUmvbD5MNdIsKLSeFRdfAQATCtoc8WcGzgZSzGhgNWkkKi66BgQig0oKK+Gfw2cOgK+J5siJlNTAMtHIXAVJYdCl4QgBKHp4uzGfvC6q41E5WpeVXH/d0IrSR1AgQYUkdfn+ND8oeEln5w5227iNAlrCPBU0NQaBvD7Mj20MiqyEg0+qBCJDCGggPrXRCoAn2cG4Ee8iTVRN7A8kGOsFLywYgQAprADi0yhmB/NIlqITv+hqahicrPcFOZOUMLi0diAAprIHw0MpBCDClNawi3kpW7YdLy5cpwT4IWFrnigARlis0tMILAoy03HoPebIiG+gFUdpmEAJkCQehQ+uGIqDbQ6jTwuGW7XVaPFmRDRwKJW3gAQEiLA8g0SaDEWCkledIy0pWaAOpzmowirTWCwJkCb2gRNt4QqB5AXoPy9n7MKeVgVfyzBT0F0Y8Ulq++JinHdBGhAAhQAhEiQCSVu/lO3u9v7qjV19bOBHlselYhAAhQAj4RgAr4uvnD3zC9w/pB4TAEAT+P2YlxCB9J5/bAAAAAElFTkSuQmCC"/>
    </defs>
    </svg>

  )
}

export default EthereumIcon
