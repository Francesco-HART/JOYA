import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:joya/component/BoxShadowComponent.dart';

void main() {

  group(
      "Android Configuration",
      () => {

        // testWidgets("Test plateform using ", ),

            group(
                "Test Widget",
                () => {
                      testWidgets("test text value",
                          (WidgetTester tester) async {
                            String _textData = 'MyTest';
                            bool _isIOSPlatform = false;
                            BoxShadowComponent _boxShadowCustum = BoxShadowComponent(text: _textData, isIOSPlatform: _isIOSPlatform,numberOfError: 404,);

                            await tester.pumpWidget(
                            MaterialApp(home: Scaffold(body: _boxShadowCustum)));
                        expect(find.text(_textData), findsOneWidget);
                      })
                    })
          });
}
